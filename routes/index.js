"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AssignRoutes;
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
}
