import styles from "./App.module.css";
import { Button } from "./button/Button";
import { GlobalErrorBoundary } from "./ErrorBoundary";

import "./global.css";

const App = () => {
	return (
		<GlobalErrorBoundary>
			<div className={styles.content}>
				<h1>React 18 Webcomponent ?</h1>
				<p>ESM version</p>
				<Button>Send event</Button>
			</div>
		</GlobalErrorBoundary>
	);
};

export default App;
