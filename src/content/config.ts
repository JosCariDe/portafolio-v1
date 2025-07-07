import { defineCollection, z } from 'astro:content'; // z de ZOD

// Definimos una colección para nuestros proyectos
const projectsCollection = defineCollection({
  type: 'content', // 'content' para archivos .md o .mdx
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    mainImage: image().refine(img => img.width >= 1080, {
      message: "La imagen principal debe tener al menos 1080px de ancho.",
    }),
    gallery: z.array(image()).optional(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

// Exportamos un objeto 'collections' para que Astro las reconozca
export const collections = {
  'projects': projectsCollection,
};
