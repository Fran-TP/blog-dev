import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string().url(),
      alt: z.string(),
      width: z.number(),
      height: z.number()
    }),
    tags: z.array(z.string())
  })
})

export const collections = { posts }
