"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, fastify_1.default)().withTypeProvider();
app.register(routes_1.default);
app.listen({ port: 3000 }, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
