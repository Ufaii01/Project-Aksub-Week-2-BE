import { z } from 'zod';

export const newsSchema = z.object({
    title: z.string().trim().min(1, "Title need to be filled"),
    desc: z.string().trim().min(1, "Desc need to be filled"),
    writer: z.string().trim().min(1, "Writer need to be filled"),
    thumbnail: z.string().trim().min(1, "Thumbnail need to be filled")
})

export const newsEditSchema = z.object({
    title: z.string().trim().optional(),
    desc: z.string().trim().optional(),
    writer: z.string().trim().optional(),
    thumbnail: z.string().trim().optional()
})

export type news = z.infer<typeof newsSchema>
export type newsEdit = z.infer<typeof newsEditSchema>