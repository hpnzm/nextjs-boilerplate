/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react() as any],
  resolve: {
    alias: [{ find: "@", replacement: __dirname }],
  },

  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./test/setup.tsx",
    deps: {
      moduleDirectories: ["node_modules", "vitest"],
    },
  },
});
