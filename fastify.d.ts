import { FastifyInstance, RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, FastifyBaseLogger } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

declare global {
    interface AppInstance extends FastifyInstance<
        RawServerDefault,
        RawRequestDefaultExpression<RawServerDefault>,
        RawReplyDefaultExpression<RawServerDefault>,
        FastifyBaseLogger,
        TypeBoxTypeProvider
    > {}
}