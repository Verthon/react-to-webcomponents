"use client";

import { PropsWithChildren } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Button } from "./button/Button";

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: "red" }}>{error.message}</pre>
			<Button onClick={resetErrorBoundary}>Retry</Button>
		</div>
	);
}

export const GlobalErrorBoundary = ({ children }: PropsWithChildren) => {
	return (
		<ErrorBoundary
			fallbackRender={fallbackRender}
		>
			{children}
		</ErrorBoundary>
	);
};
