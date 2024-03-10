import styled from "@emotion/styled";
import Text from "../../Text/Text";

interface TitleProps {
	children: string;
}

const Title = ({ children }: TitleProps) => {
	return <TitleStyle>{children}</TitleStyle>;
};

export default Title;

const TitleStyle = styled(Text.Span)`
	display: flex;
	align-items: center;

	font-size: 12px;
	line-height: 14px;

	margin-bottom: 4px;

	color: #525252;
`;
