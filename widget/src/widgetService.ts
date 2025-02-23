type Theme = {
	colors: {
		primary: string;
		darkNeutral: string;
		mediumNeutral: string;
	};
	fontFamily: string;
};

export const DEFAULT_THEME: Theme = {
	colors: {
		primary: "#540b0e",
		darkNeutral: "#335c67",
		mediumNeutral: "#777",
	},
	fontFamily: "Ubuntu, sans-serif",
};

const mergeTheme = (base: Theme, partial?: Partial<Theme>): Theme => {
	if (!partial) {
		return base;
	}

	return {
		...base,
		colors: {
			...base.colors,
			...partial.colors,
		},
		fontFamily: partial.fontFamily ?? base.fontFamily,
	};
};

export const createWidgetService = (
	hostElement: HTMLElement,
	initialTheme?: Partial<Theme>
) => {
	let currentTheme: Theme = mergeTheme(DEFAULT_THEME, initialTheme);

	const configureTheme = (themeOverrides: Partial<Theme>) => {
		currentTheme = mergeTheme(currentTheme, themeOverrides);
		applyTheme(currentTheme, hostElement);
	};

	const applyTheme = (theme: Theme, el: HTMLElement) => {
		el.style.setProperty("--mywidget-primary", theme.colors.primary);
		el.style.setProperty("--mywidget-dark-neutral", theme.colors.darkNeutral);
		el.style.setProperty(
			"--mywidget-medium-neutral",
			theme.colors.mediumNeutral
		);
		el.style.setProperty("--mywidget-font-family", theme.fontFamily);
	};

	return {
		configureTheme,
	};
};
