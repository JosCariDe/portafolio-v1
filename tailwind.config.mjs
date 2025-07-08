
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Aquí podríamos extender el tema en el futuro, como añadir colores o fuentes personalizadas.
    },
  },
  plugins: [
    typography(), // <-- Aquí registramos el plugin de tipografía
  ],
}
