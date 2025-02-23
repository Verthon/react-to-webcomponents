declare global {
	interface Window {
		wt: WtGlobal;
	}
}

interface WtGlobal {
	configureTheme: (theme: Partial<object>) => void;
}

export {};
