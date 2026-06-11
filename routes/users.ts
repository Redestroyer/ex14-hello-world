import { Router } from "express";

export default function GetUserRouter() {
    const router = Router();

    router.get("/:id", (req, res) => {
        const id = req.params.id;

        res.send({ id });
    })

    return router
}