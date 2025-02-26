import { MouseEventHandler, PropsWithChildren } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

export const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};
