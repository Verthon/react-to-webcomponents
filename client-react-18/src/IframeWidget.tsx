import { useEffect } from "react";

export const IframeWidget = () => {
	useEffect(() => {
		console.log("window.wt", window.wt);
		if (window.wt) {
			window.wt.configureTheme({
				primaryColor: "green",
				fontFamily: "Inter",
			});
			window.wt.init();
		}

		return () => {
			return window.wt.destroy();
		};
	}, []);

	return <div id="my-iframe-widget"></div>;
};
