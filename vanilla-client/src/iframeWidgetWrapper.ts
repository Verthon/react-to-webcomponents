export const injectIframeWidget = () => {
	const body = document.querySelector("body");
	const iframeMountPoint = document.createElement("div");
	iframeMountPoint.id = "my-iframe-widget";
	const script = document.createElement('script');
  script.type = 'module';
  script.src = "http://localhost:5555/index.js"
  script.async = true;
	script.addEventListener('load', () => {
    if (window.wt) {
      window.wt.configureTheme({
        primaryColor: 'green',
        fontFamily: 'Inter',
      });
      window.wt.init();
    } else {
      console.error('Widget API (window.wt) is not available yet!');
    }
  });
	body?.append(iframeMountPoint);
	body?.append(script);
};
