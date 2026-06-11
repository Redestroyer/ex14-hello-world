"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
const typebox_1 = __importDefault(require("typebox"));
const users_1 = __importDefault(require("./users"));
function Routes(app) {
    app.get("/", async (req, res) => {
        return res.send("Home");
    });
    app.get("/sobre", async (req, res) => {
        return res.send("Sobre");
    });
    app.get("/contato", async (req, res) => {
        return res.send("Contato");
    });
    app.register(users_1.default, { prefix: "/usuarios" });
    app.get("/busca", {
        schema: {
            querystring: typebox_1.default.Partial(typebox_1.default.Object({
                q: typebox_1.default.String(),
                pagina: typebox_1.default.Integer()
            }))
        }
    }, async (req, res) => {
        const { q, pagina } = req.query;
        return res.send({ pagina, q: q ?? "" });
    });
    for (const path of ["/eco", "/echo"]) {
        app.post(path, {
            schema: {
                body: typebox_1.default.Object({})
            }
        }, async (req, res) => {
            return res.send(req.body);
        });
    }
    return app;
}
