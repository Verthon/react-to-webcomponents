interface ThemeConfig {
  primaryColor?: string;
  backgroundColor?: string;
  fontFamily?: string;
}

const WIDGET_ID = "my-iframe-widget";
let iframeInstance: HTMLIFrameElement | null = null;
let currentTheme: ThemeConfig = {};

const defaultTheme: Required<ThemeConfig> = {
  primaryColor: "#007bff",
  backgroundColor: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

function mergeThemeWithDefaults(theme?: ThemeConfig) {
  return { ...defaultTheme, ...theme };
}

function generateIframeContent() {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <h2>Iframe Widget Loaded!</h2>
        <div id="widget-root"></div>
      </body>
    </html>
  `;
}

function createIframe(container: HTMLElement, onLoadCallback: (iframe: HTMLIFrameElement) => void) {
  if (iframeInstance) return;

  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "500px";
  iframe.style.border = "0";
  iframe.title = "Iframe Widget";

  iframe.onload = () => {
    const iframeDoc = iframe.contentDocument;
    if (!iframeDoc) {
      console.error("Iframe document is not accessible.");
      return;
    }

    iframeDoc.open();
    iframeDoc.write(generateIframeContent());
    iframeDoc.close();

    iframeInstance = iframe;
    onLoadCallback(iframe);
  };

  container.appendChild(iframe);
}

function mountReactComponent(iframe: HTMLIFrameElement, theme?: ThemeConfig) {
  import("./bootstrap")
    .then(({ bootstrapWidget }) => {
      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) {
        console.error("Error: iframe document is missing.");
        return;
      }

      const iframeHead = iframeDoc.head;
      const mountPoint = iframeDoc.getElementById("widget-root");

      if (!iframeHead || !mountPoint) {
        console.error("Error: Missing iframe head or mount point.");
        return;
      }

      bootstrapWidget(theme, iframeHead, mountPoint);
    })
    .catch((error) => {
      console.error("Error loading the React Widget:", error);
      throw new Error("Could not mount the React Widget");
    });
}

function configureTheme(theme: ThemeConfig) {
  currentTheme = mergeThemeWithDefaults(theme);
}

function initializeWidget() {
  const container = document.getElementById(WIDGET_ID);
  if (!container) {
    throw new Error("Could not find the mounting point.");
  }

  if (!iframeInstance) {
    createIframe(container, (iframe) => {
      mountReactComponent(iframe, currentTheme);
    });
  }
}

function destroyWidget() {
  if (iframeInstance) {
    iframeInstance.remove();
    iframeInstance = null;
  }
}

export const api = {
  configureTheme,
  init: initializeWidget,
  destroy: destroyWidget,
} as const;
