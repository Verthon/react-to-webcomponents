import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	output: {
		distPath: {
			js: "",
		},
		filename: {
			js: (pathData) => {
				if (pathData.chunk?.name === "index") {
					return "index.js";
				}

				return "[name].[contenthash:8].js";
			},

			css: (pathData) => {
				if (pathData.chunk?.name === "index") {
					return "index.css";
				}

				return "[name].[contenthash:8].css";
			},
		},
		minify: false,
	},

	performance: {
		chunkSplit: {
			strategy: "all-in-one",
		},
	},
});
