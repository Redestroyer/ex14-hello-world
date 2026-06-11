"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetUserRouter;
const express_1 = require("express");
function GetUserRouter() {
    const router = (0, express_1.Router)();
    router.get("/:id", (req, res) => {
        const id = req.params.id;
        res.send({ id });
    });
    return router;
}
