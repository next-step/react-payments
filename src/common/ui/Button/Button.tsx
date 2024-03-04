import { ColorType, theme } from "@/common/utils/theme";
import { css } from "@emotion/react";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: ColorType;
	activeButtonColor?: ColorType;
	disabledButtonColor?: ColorType;
	color?: ColorType;
	width?: number;
	height?: number;
	fontSize?: number;
	children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			type = "button",
			width = 100,
			height = 3,
			fontSize = 14,
			buttonColor = "white",
			activeButtonColor = "grey200",
			disabledButtonColor = "grey800",
			...rest
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				type={type}
				disabled={false}
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;
					width: ${width}%;
					height: ${height}rem;
					border: 0 solid transparent;
					border-radius: 0.5rem;
					background-color: ${theme.colors[buttonColor]};
					font-size: ${fontSize}px;
					white-space: nowrap;
					user-select: none;
					-webkit-font-smoothing: antialiased;
					transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
					&:focus {
						outline: none;
					}
					&:disabled {
						background-color: ${theme.colors[disabledButtonColor]};
						cursor: not-allowed;
					}
					&:active {
						background-color: ${theme.colors[activeButtonColor]};
					}
				`}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

export default Button;
