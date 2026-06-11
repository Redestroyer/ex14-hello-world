import Type from "typebox";
import UserRoutes from "./users";

export default function Routes(app: AppInstance): AppInstance {
    app.get("/", async(req, res) => {
        return res.send("Home");
    });
    app.get("/sobre", async(req, res) => {
        return res.send("Sobre");
    });
    app.get("/contato", async(req, res) => {
        return res.send("Contato");
    });

    app.register(UserRoutes, { prefix: "/usuarios" });

    app.get("/busca", {
        schema: {
            querystring: Type.Partial(Type.Object({
                q: Type.String(),
                pagina: Type.Integer()
            }))
        }
    }, async(req, res) => {
        const { q, pagina } = req.query;

        return res.send({ pagina, q: q ?? "" })
    });

    for (const path of ["/eco", "/echo"]) {
        app.post(path, {
            schema: {
                body: Type.Object({})
            }
        }, async(req, res) => {
            return res.send(req.body);
        })
    }

    return app;
}