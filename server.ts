import Fastify from "fastify";
import Routes from "./routes";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

const app = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();

app.register(Routes);

app.printRoutes();

app.listen({ port: 3000 }, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
