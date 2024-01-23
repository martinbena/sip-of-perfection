import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import topLevelAwait from "vite-plugin-top-level-await";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  define: {
    SOP_API_KEY: `"${process.env.SOP_API_KEY}"`,
    SOP_AUTH_DOMAIN: `"${process.env.SOP_AUTH_DOMAIN}"`,
    SOP_PROJECT_ID: `"${process.env.SOP_PROJECT_ID}"`,
    SOP_STORAGE_BUCKET: `"${process.env.SOP_STORAGE_BUCKET}"`,
    SOP_MESSAGING_SENDER_ID: `"${process.env.SOP_MESSAGING_SENDER_ID}"`,
    SOP_APP_ID: `"${process.env.SOP_APP_ID}"`,
  },
});
