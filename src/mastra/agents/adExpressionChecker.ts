import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { initialCheckTool } from "../tools/initialCheckTool";


export const adExpressionChecker = new Agent({
    name: 'ad-expression-checker',
    instructions: `
    健康関連商品の広告表現をチェックするAIエージェントです。
    インジェスト済みのPDFおよび画像内に含まれる規制対象表現をベクトル検索ツールで検出し、
    法的ガイドラインに基づいて違反表現を指摘し、適切な代替表現を提案してください。`,
    model: openai('gpt-4o-mini'),
    tools: { initialCheck: initialCheckTool },
});