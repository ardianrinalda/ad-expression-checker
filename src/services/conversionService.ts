import { ConversionChunk, ConversionObject } from "../types/conversion";

export async function parsePdf(filePath: string): Promise<ConversionChunk[]> {
    return [];
}

export async function parseImage(filePath: string): Promise<ConversionChunk[]>{
    return [];
}

export async function convertFiles(
    filePaths: string[],
    metadata: ConversionObject['metadata']
): Promise<ConversionObject> {
    const chunks: ConversionChunk[] = [];
    for (const fp of filePaths) {
        if (fp.endsWith('.pdf')) {
            chunks.push(...await parsePdf(fp));
        } else {
            chunks.push(...await parseImage(fp));
        }
    }
    return { chunks , metadata };
}
