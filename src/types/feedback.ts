export interface ExpressionFeedback {
    text: string ;
    bbox: { x1: number; y1: number; x2: number; y2: number };
    note: string;
}