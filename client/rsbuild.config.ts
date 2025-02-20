import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

export default defineConfig({
	plugins: [pluginVue({
    vueLoaderOptions: {
      //@ts-expect-error kek
      isCustomElement: tag => tag === 'react-app'
    }
  })],
	html: {
		template: "./index.html",
	},
});
