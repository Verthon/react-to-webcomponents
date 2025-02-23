const origin = "http://localhost:5555";

export const createConfig = () => {
	const createGlobalFontLinks = () => {
		const preconnectLink = document.createElement("link");
		preconnectLink.rel = "preconnect";
		preconnectLink.href = "https://fonts.googleapis.com";

		const preconnectStaticLink = document.createElement("link");
		preconnectStaticLink.rel = "preconnect";
		preconnectStaticLink.href = "https://fonts.gstatic.com";
		preconnectStaticLink.crossOrigin = "anonymous";

		const fontLink = document.createElement("link");
		fontLink.rel = "stylesheet";
		fontLink.href =
			"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";

		return {
			preconnectLink,
			preconnectStaticLink,
			fontLink,
		};
	};

	const createWidgetStyleLink = () => {
		const link = document.createElement("link");
		link.id = "main-widget-css";
		link.rel = "stylesheet";
		link.crossOrigin = "anonymous";
		link.href = `${origin}/static/css/index.css`;

		return {
			mainWidgetCssLink: link,
		};
	};

	return {
		jsChunkLocation: `${origin}/index.js`,
		createGlobalFontLinks,
		createWidgetStyleLink,
	};
};
