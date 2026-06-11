import type { Express } from "express";

export default function AssignRoutes(app: Express) {
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