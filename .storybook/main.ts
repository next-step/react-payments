import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
const path = require("path");

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	framework: {
		name: "@storybook/react-vite",
		options: {}
	},
	docs: {
		autodocs: "tag"
	},
	core: {
		builder: "@storybook/builder-vite"
	},
	viteFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "../src")
		};

		return mergeConfig(config, {
			define: { "process.env": {} }
		});
	}
};
export default config;
