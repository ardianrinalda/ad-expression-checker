import { Mastra } from "@mastra/core";
import { PgVector } from "@mastra/pg";
import { adExpressionChecker } from "./agents/adExpressionChecker";


const pgVector = new PgVector(process.env.POSTGRES_CONNECTION_STRING!);

export const mastra = new Mastra({
    agents: { adExpressionChecker },
    vectors: { pgVector },
})