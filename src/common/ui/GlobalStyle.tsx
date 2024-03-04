import { css, Global } from "@emotion/react";
import { theme } from "../utils/theme";

const GlobalStyle = () => (
	<Global
		styles={css`
			* {
				scroll-behavior: smooth;
				-webkit-tap-highlight-color: transparent;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				::-webkit-scrollbar {
					width: 0;
					display: none !important;
				}
				-webkit-touch-callout: none;
			}
			html,
			body,
			div,
			span,
			applet,
			object,
			iframe,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p,
			blockquote,
			pre,
			a,
			abbr,
			acronym,
			address,
			big,
			cite,
			code,
			del,
			dfn,
			em,
			img,
			ins,
			kbd,
			q,
			s,
			samp,
			small,
			strike,
			strong,
			sub,
			sup,
			tt,
			var,
			b,
			u,
			i,
			center,
			dl,
			dt,
			dd,
			ol,
			ul,
			li,
			fieldset,
			form,
			label,
			legend,
			table,
			caption,
			tbody,
			tfoot,
			thead,
			tr,
			th,
			td,
			article,
			aside,
			canvas,
			details,
			embed,
			figure,
			figcaption,
			footer,
			header,
			hgroup,
			menu,
			nav,
			output,
			ruby,
			section,
			summary,
			time,
			mark,
			audio,
			input,
			textarea,
			button,
			video {
				margin: 0;
				padding: 0;
				border: 0;
				font-size: inherit;
				font: inherit;
				color: ${theme.colors.black};
				font-family: "NanumSquareRoundR", "NanumSquareRoundB", sans-serif;
				vertical-align: baseline;
				box-sizing: border-box;
				-webkit-tap-highlight-color: transparent;
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-o-user-select: none;
				user-select: none;
				-webkit-user-drag: none;
				-khtml-user-drag: none;
				-moz-user-drag: none;
				-o-user-drag: none;
				user-drag: none;
			}
			html {
				background-color: ${theme.colors.white};
			}
			body {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				align-items: center;
				justify-content: center;
				background-color: #e5e5e5;
			}
			li,
			ol,
			ul {
				list-style: none;
			}
			a {
				background-color: transparent;
				text-decoration: none;
				outline: none;
				color: inherit;
				&:active,
				&:hover {
					text-decoration: none;
					color: inherit;
					outline: 0;
				}
				-webkit-tap-highlight-color: transparent;
			}
			button {
				display: flex;
				align-items: center;
				justify-content: center;
				outline: none;
				border: none;
				background: none;
				padding: 0;
				user-select: none;
				cursor: pointer;
				white-space: nowrap;
				letter-spacing: inherit;
				font: inherit;
				color: inherit;
				-webkit-tap-highlight-color: transparent;
			}
			a {
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-o-user-select: none;
				user-select: none;
				-webkit-user-drag: none;
				-khtml-user-drag: none;
				-moz-user-drag: none;
				-o-user-drag: none;
				user-drag: none;
			}
			img {
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-o-user-select: none;
				user-select: none;
				-webkit-user-drag: none;
				-khtml-user-drag: none;
				-moz-user-drag: none;
				-o-user-drag: none;
				user-drag: none;
			}
			input {
				font-size: 16px;
			}
			#root {
				background-color: #fff;
				width: 375px;
				min-width: 375px;
				height: 700px;
				position: relative;
				border-radius: 15px;
			}
			#app {
				height: 100%;
				padding: 16px 24px;
			}
		`}
	/>
);
export default GlobalStyle;
