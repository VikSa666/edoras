import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "Edoras",
      fileName: (format) => `edoras.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false,
  },
});
