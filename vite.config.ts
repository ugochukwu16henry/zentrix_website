import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
    // Nitro auto-selects the `vercel` preset when VERCEL=1 during Vercel builds.
    nitro(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
    tsconfigPaths: true,
  },
});
