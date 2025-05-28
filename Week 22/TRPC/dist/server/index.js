"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const trpc_1 = require("./trpc");
const standalone_1 = require("@trpc/server/adapters/standalone");
const todoInputType = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
const signUpInputType = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure.input(todoInputType).mutation((otps) => __awaiter(void 0, void 0, void 0, function* () {
        const userName = otps.ctx.userName;
        console.log(userName);
        const title = otps.input.title;
        const description = otps.input.description;
        console.log("Hello from TRPC server function");
        // do DB stuff here
        return {
            id: "1",
            message: "todo creation completed",
            title,
        };
    })),
    signUp: trpc_1.publicProcedure.input(signUpInputType).mutation((otps) => __awaiter(void 0, void 0, void 0, function* () {
        const email = otps.input.email;
        const password = otps.input.password;
        // email already exist validation
        // Do DB stuff add to DB
        // jwt.sign(userId,secret)
        let token = "123456"; // JWT token
        return {
            token,
            email,
            message: "SignUp completed",
        };
    })),
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext(otps) {
        let authHeader = otps.req.headers["authorization"];
        console.log(authHeader);
        return {
            userName: "123",
        };
    },
});
server.listen(3000);
