"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let senderSocket = null;
let receiverSocket = null;
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        const message = JSON.parse(data);
        if (message.type === "id-as-sender") {
            console.log("sender Set");
            senderSocket = ws;
        }
        else if (message.type === "id-as-receiver") {
            console.log("receiver Set");
            receiverSocket = ws;
        }
        else if (message.type === "create-offer") {
            if (ws !== senderSocket) {
                return;
            }
            console.log("Create Offer");
            receiverSocket === null || receiverSocket === void 0 ? void 0 : receiverSocket.send(JSON.stringify({
                type: "offer",
                sdp: message.sdp,
            }));
        }
        else if (message.type === "create-answer") {
            if (ws !== receiverSocket) {
                return;
            }
            console.log("Create answer");
            senderSocket === null || senderSocket === void 0 ? void 0 : senderSocket.send(JSON.stringify({
                type: "answer",
                sdp: message.sdp,
            }));
        }
        else if (message.type === "add-ice-candidate") {
            console.log("ice-candidate");
            if (ws === senderSocket) {
                receiverSocket === null || receiverSocket === void 0 ? void 0 : receiverSocket.send(JSON.stringify({
                    type: "ice-candidate",
                    candidate: message.candidate,
                }));
            }
            else if (ws === receiverSocket) {
                senderSocket === null || senderSocket === void 0 ? void 0 : senderSocket.send(JSON.stringify({
                    type: "ice-candidate",
                    candidate: message.candidate,
                }));
            }
        }
    });
    ws.send("something");
});
