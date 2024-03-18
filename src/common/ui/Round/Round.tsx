import { css } from "@emotion/react";

export interface RoundProps {
	/** width: px */
	width: number;
	/** height: px */
	height: number;
	color: string;
}

const Round = ({ width, height, color }: RoundProps) => {
	return (
		<div
			css={css`
				width: ${width}px;
				height: ${height}px;
				border-radius: 50%;
				background-color: ${color};
			`}
		/>
	);
};

export default Round;
