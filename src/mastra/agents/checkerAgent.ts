import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { createVectorQueryTool } from "@mastra/rag";


const vectorQueryTool = createVectorQueryTool({
    vectorStoreName: 'pgVector',
    indexName: 'ads',
    model: openai.embedding('text-embedding-3-small'),
});

export const adExpressionChecker = new Agent({
    name: 'Ad Expression Checker',
    instructions: `
    あらゆる製品の広告表現をチェックするAIエージェントです。
    インジェスト済みのPDFおよび画像内に含まれる規制対象表現をベクトル検索ツールで検出し、
    法的ガイドラインに基づいて違反表現を指摘し、適切な代替表現を提案してください。`,
    model: openai('gpt-4o-mini'),
    tools: { vectorQueryTool },
});