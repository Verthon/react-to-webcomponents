import { AppWithStyles } from "./WebComponent";

// Create or reuse window.wt
if (!window.wt) {
  window.wt = {};
}

//@ts-expect-error
window.wt.configureTheme = (theme: object) => {
  const widgetEl = document.querySelector("react-app");
  if (!widgetEl) {
    console.warn("No <react-app> found yet.");
    return;
  }

	//@ts-expect-error
  widgetEl.configureTheme?.(theme);
};

customElements.define("react-app", AppWithStyles);
