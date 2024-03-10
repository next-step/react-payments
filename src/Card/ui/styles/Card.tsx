import { CardSize } from "@/Card/utils/style";
import Text from "@/common/ui/Text/Text";
import styled from "@emotion/styled";

interface CardCompanyProps {
	size: CardSize;
}

export const CardText = styled(Text.Span)<CardCompanyProps>`
	margin: 0 16px;

	font-size: ${({ size }) => (size === "small" ? "14px" : "18px")};
	line-height: ${({ size }) => (size === "small" ? "16px" : "20px")};
	vertical-align: middle;
	font-weight: 400;
`;

export const CardBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin: 10px 0;
`;

export const CardTop = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
`;

export const CardMiddle = styled.div`
	width: 100%;
	height: 100%;
	margin-left: 30px;

	display: flex;
	align-items: center;
`;

export const CardBottom = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CardBottomInfo = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;
