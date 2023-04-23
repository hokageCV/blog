import { z, defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      draft: z.boolean().default(false),
      tags: z.array(z.string()),
    }),
  }),
};

// define type based on the collection schema made using zod

// export type Blog = z.infer<typeof blog.schema>;
