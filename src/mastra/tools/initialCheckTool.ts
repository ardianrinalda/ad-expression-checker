// src/tools/initialCheckTool.ts
import { createTool } from '@mastra/core'
import { z } from 'zod'
import { runInitialCheck } from '../../services/initialCheckService'


// 1) スキーマ定義
const ConversionSchema = z.object({
  chunks: z.array(
    z.object({
      text: z.string(),
      bbox: z.object({
        x1: z.number(),
        y1: z.number(),
        x2: z.number(),
        y2: z.number(),
      }),
    })
  ),
  metadata: z.object({
    category: z.string(),
    advertiser: z.string().optional(),
  }),
})

const FeedbackSchema = z.array(
  z.object({
    text: z.string(),
    bbox: z.object({
      x1: z.number(),
      y1: z.number(),
      x2: z.number(),
      y2: z.number(),
    }),
    note: z.string(),
  })
)

// 2) ジェネリクスでスキーマ型を指定して createTool
export const initialCheckTool = createTool<
  typeof ConversionSchema,
  typeof FeedbackSchema
>({
  name: 'initialCheck',
  description: '広告表現のNGチェックを実行します。',
  inputSchema: ConversionSchema,
  outputSchema: FeedbackSchema,
  func: runInitialCheck,
})
