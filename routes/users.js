"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserRoutes;
const typebox_1 = __importDefault(require("typebox"));
function UserRoutes(app) {
    app.get("/:id", {
        schema: {
            params: typebox_1.default.Object({
                id: typebox_1.default.String()
            })
        }
    }, async (req, res) => {
        const id = req.params.id;
        return res.send({ id });
    });
}
