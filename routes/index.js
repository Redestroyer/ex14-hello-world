"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AssignRoutes;
const users_1 = __importDefault(require("./users"));
function AssignRoutes(app) {
    app.get("/", (req, res) => {
        res.send("Home");
    });
    app.get("/sobre", (req, res) => {
        res.send("Sobre");
    });
    app.get("/contato", (req, res) => {
        res.send("Contato");
    });
    app.use("/usuarios", (0, users_1.default)());
    return app;
}
