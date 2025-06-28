import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data: any) {
    const message = JSON.parse(data);
    if (message.type === "id-as-sender") {
      senderSocket = ws;
    } else if (message.type === "id-as-receiver") {
      receiverSocket = ws;
    } else if (message.type === "create-offer") {
      if (ws !== senderSocket) {
        return;
      }
      receiverSocket?.send(
        JSON.stringify({
          type: "offer",
          sdp: message.sdp,
        })
      );
    } else if (message.type === "create-answer") {
      if (ws !== receiverSocket) {
        return;
      }
      senderSocket?.send(
        JSON.stringify({
          type: "answer",
          sdp: message.sdp,
        })
      );
    } else if (message.type === "add-ice-candidate") {
      if (ws === senderSocket) {
        receiverSocket?.send(
          JSON.stringify({
            type: "ice-candidate",
            candidate: message.candidate,
          })
        );
      } else if (ws === receiverSocket) {
        senderSocket?.send(
          JSON.stringify({
            type: "ice-candidate",
            candidate: message.candidate,
          })
        );
      }
    }
  });

  ws.send("something");
});
