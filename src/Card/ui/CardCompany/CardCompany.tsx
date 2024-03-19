import Round from "@/common/ui/Round/Round";
import Text from "@/common/ui/Text/Text";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface CardCompanyProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	company: string;
	color: string;
}

const CardCompany = ({ company, color, ...rest }: CardCompanyProps) => {
	return (
		<Container {...rest}>
			<Round width={24} height={24} color={color} />
			<Text.Span>{company} 카드</Text.Span>
		</Container>
	);
};

export default CardCompany;

const Container = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 4px;
	transition: opacity 0.3s ease-in-out;

	&:active {
		opacity: 0.5;
	}
`;
