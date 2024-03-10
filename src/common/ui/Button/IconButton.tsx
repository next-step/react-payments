import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import Icon, { IconProps } from "../assets/Icon";

export type IconButtonProps = IconProps &
	ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ name, size, ...restProps }: IconButtonProps) => {
	return (
		<StyleButton {...restProps}>
			<Icon name={name} size={size} />
		</StyleButton>
	);
};

export default IconButton;

const StyleButton = styled.button`
	display: flex;
	justify-content: flex-end;
`;
