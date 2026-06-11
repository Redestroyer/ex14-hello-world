import Express from "express";
import AssignRoutes from "./routes";

const app = Express();

AssignRoutes(app);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
