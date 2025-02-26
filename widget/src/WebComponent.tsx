import r2wc from "react-to-webcomponent";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { createConfig } from "./config";
import { createWidgetService } from "./widgetService";

export class AppWithStyles extends r2wc(App, React, ReactDOM, {
	props: { name: "string" },
	shadow: "open",
}) {
	private service

	constructor() {
		super();
		const { createWidgetStyleLink, createGlobalFontLinks } = createConfig();
		const { mainWidgetCssLink } = createWidgetStyleLink();
		const { fontLink, preconnectLink, preconnectStaticLink } =
			createGlobalFontLinks();
		this.shadowRoot?.appendChild(fontLink);
		this.shadowRoot?.appendChild(preconnectLink);
		this.shadowRoot?.appendChild(preconnectStaticLink);
		this.shadowRoot?.appendChild(mainWidgetCssLink);
		this.service = createWidgetService(this.shadowRoot?.host as HTMLElement);
	}

	connectedCallback() {
		//@ts-expect-error no idea what am I doing - its probably this https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks
		super.connectedCallback();
	}

	public configureTheme(themeOverrides: Partial<object>) {
    this.service?.configureTheme(themeOverrides);
  }
}
