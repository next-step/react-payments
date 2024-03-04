import { CardText } from "../../styles/Card";
import useCardContext from "../provider/useCardContext";

export interface CardNameProps {
	text: string;
}

const CardCompany = ({ text }: CardNameProps) => {
	const { size } = useCardContext();
	return <CardText size={size}>{text}</CardText>;
};

export default CardCompany;
