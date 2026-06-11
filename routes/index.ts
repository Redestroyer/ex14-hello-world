import type { Express } from "express";
import GetUserRouter from "./users";

export default function AssignRoutes(app: Express): Express {
    app.get("/", (req, res) => {
        res.send("Home");
    });
    app.get("/sobre", (req, res) => {
        res.send("Sobre");
    });
    app.get("/contato", (req, res) => {
        res.send("Contato");
    });

    app.use("/usuarios", GetUserRouter());

    return app;
}