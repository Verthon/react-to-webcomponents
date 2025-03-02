import { createRoot } from "react-dom/client";
import Widget from "./Widget";

export function bootstrapWidget(
	theme?: object,
	iframeHeadElement?: HTMLElement,
	mountPoint?: HTMLElement
) {
	console.log("bootstrapWidget", theme, iframeHeadElement, mountPoint);

	if (!iframeHeadElement) {
		throw new Error(
			"[bootstrapWidget] Missing iframeHead. Widget requires an iframe <head> target."
		);
	}

	if (!mountPoint) {
		throw new Error(
			"[bootstrapWidget] Missing mounting div."
		);
	}

	const root = createRoot(mountPoint);
	root.render(<Widget theme={theme} iframeHead={iframeHeadElement} />);

	return mountPoint;
}
