"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const generateOTP = () => {
    return Math.floor(Math.random() * 100000);
};
const OtpStore = {};
app.post("/rateLimit", (req, res) => {
});
app.listen(PORT, () => {
    console.log(generateOTP());
    console.log("Listening to port 3000");
});
