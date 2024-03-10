import { CardText } from "../../styles/Card";
import useCardContext from "../provider/useCardContext";

export interface NameProps {
	text: string;
}

const Name = ({ text }: NameProps) => {
	const { size } = useCardContext();
	return <CardText size={size}>{text}</CardText>;
};

export default Name;
