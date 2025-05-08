import { openai } from "@ai-sdk/openai";
import { createVectorQueryTool } from "@mastra/rag";

export const adRagTool = createVectorQueryTool({
    vectorStoreName: 'memory',
    indexName: 'ads',
    model: openai.embedding('text-embedding-3-small'),
});