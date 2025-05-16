"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// startLogger();
// setInterval(() => {
//     gameManager.addGame({
//         id:(Math.random()*10000).toString(),
//         "whitePlayer": "harkirat",
//         "blackPlayer": "jaskirat",
//         moves: []
//     })
// }, 5000)
const PubsubManager_1 = require("./PubsubManager");
setInterval(() => {
    PubsubManager_1.pubsubManager.userSubscribe(Math.random().toString(), "APPL");
}, 5000);
