import { CardText } from "../../styles/Card";
import useCardContext from "../provider/useCardContext";

export interface ExpirationDateProps {
	month: string;
	year: string;
}

const ExpirationDate = ({ month, year }: ExpirationDateProps) => {
	const { size } = useCardContext();
	return (
		<CardText size={size}>
			{month} / {year}
		</CardText>
	);
};

export default ExpirationDate;
