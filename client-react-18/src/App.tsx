import { useState, useCallback } from "react";

import "./App.css";
import { IframeWidget } from "./IframeWidget";
import { WebComponentWidget } from "./WebComponentWidget";

export function useCounter(initialValue = 0) {
	const [count, setCount] = useState(initialValue);

	const increment = useCallback(() => {
		setCount((prev) => prev + 1);
	}, []);

	const decrement = useCallback(() => {
		setCount((prev) => prev - 1);
	}, []);

	const reset = useCallback(() => {
		setCount(initialValue);
	}, [initialValue]);

	return { count, increment, decrement, reset };
}

const App = () => {
	const { count, increment, decrement, reset } = useCounter();

	return (
		<div className="content">
			<h1>Client React 18</h1>
			<div className="counter">
				<h2>Counter: {count}</h2>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
				<button onClick={reset}>Reset</button>
			</div>

			<WebComponentWidget />
			<IframeWidget />
		</div>
	);
};

export default App;
