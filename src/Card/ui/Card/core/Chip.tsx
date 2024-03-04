import styled from "@emotion/styled";
import { CardSize } from "../../../utils/style";
import useCardContext from "../provider/useCardContext";

const Chip = () => {
	const { size } = useCardContext();
	return <CardChip size={size} />;
};

export default Chip;

interface CardChipProps {
	size: CardSize;
}

const CardChip = styled.div<CardChipProps>`
	${({ size }) => `
    width: ${size === "small" ? "40px" : "55.04px"};
    height: ${size === "small" ? "26px" : "35.77px"};
    background: #cbba64;
    border-radius: 4px;
    font-size: ${size === "small" ? "12px" : "24px"};
    top: 122px;
    ${size === "small" ? "left: 95px;" : ""}
  `}
`;
