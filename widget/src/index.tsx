import { AppWithStyles } from "./WebComponent";
import { createWidgetService } from "./widgetService";

const { configureTheme } = createWidgetService();

//@ts-expect-error
window.wt = {
	configureTheme: configureTheme,
};

customElements.define("react-app", AppWithStyles);
