import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: [
    {
      directory: "../components/stories",
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "Components",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => ({
    ...config,
    define: {
      "process.env": {},
    },
    resolve: {
      ...config.resolve,

      alias: {
        "@": resolve(__dirname, ".."),
      },
    },
  }),
};
export default config;
