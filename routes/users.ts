import Type from "typebox";

export default function UserRoutes(app: AppInstance) {
    app.get("/:id", {
        schema: {
            params: Type.Object({
                id: Type.String()
            })
        }
    }, async(req, res) => {
        const id = req.params.id;

        return res.send({ id });
    })
}