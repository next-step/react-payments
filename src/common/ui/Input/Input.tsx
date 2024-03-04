import { css } from "@emotion/react";
import { InputHTMLAttributes, forwardRef } from "react";
import { TextAlign, Width, theme } from "../../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	width?: Width;
	underline?: boolean;
	textAlign?: TextAlign;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ width = 100, underline = false, textAlign = "center", ...rest }, ref) => {
		return (
			<input
				ref={ref}
				css={css`
					width: ${width}%;
					text-align: ${textAlign};
					:disabled {
						background-color: ${theme.colors.white};
					}
					:read-only {
						background-color: ${theme.colors.white};
					}
					${underline ? underLineInputCss : basicInputCss}
				`}
				{...rest}
			/>
		);
	}
);

export default Input;

const basicInputCss = css`
	background-color: #ecebf1;
	height: 45px;
	outline: 2px solid transparent;
	outline-offset: 2px;
	border-color: #9ca3af;
	border: none;
	border-radius: 0.25rem;
	padding: 0 12px;
`;

const underLineInputCss = css`
	text-align: center;
	border: none;
	background: none;
	outline: none;
	margin: 16px 0;
	padding: 4px 0;
	border-bottom: 1px solid #383838;
`;
