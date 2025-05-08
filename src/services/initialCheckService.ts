import { adRagTool } from "../mastra/tools/adRagTool";
import { ConversionObject } from "../types/conversion";
import { ExpressionFeedback } from "../types/feedback";


export async function runInitialCheck(
    input: ConversionObject
): Promise<ExpressionFeedback[]> {
    const feedbacks: ExpressionFeedback[]=[];

    for (const chunk of input.chunks) {
        const { text, bbox } = chunk;

        const results = await adRagTool.call({  q: text, k: 3, filter: { category: input.metadata.category } });

        for (const hit of results) {
            feedbacks.push({
                text: hit.text,
                bbox,
                note: hit.metadata.suggestion,
            });
        }
    }

    return feedbacks
}