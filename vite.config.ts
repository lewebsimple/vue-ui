import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "vue-ui",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "cjs" ? "vue-ui.cjs" : "vue-ui.mjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false,
  },
});
