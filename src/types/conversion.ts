export interface ConversionChunk {
    text: string;
    bbox: { x1: number; y1: number; x2: number; y2: number };
}

export interface ConversionObject {
    chunks: ConversionChunk[];
    metadata: { category: string; advertiser?: string; [key: string]: any };
}