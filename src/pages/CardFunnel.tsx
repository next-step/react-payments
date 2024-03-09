import AddCard from "@/Card/Add/AddCard";
import CardList from "@/Card/List/CardList";
import SuccessAddCard from "@/Card/Success/SuccessAddCard";
import { CardInfo } from "@/Card/types/card";
import { makeNewCard } from "@/Card/utils";
import { extractNonEmptyArrayKeys } from "@/common/hooks/funnel";
import { useFunnel } from "@/common/hooks/funnel/useFunnel";
import navigationPath, {
	CARD_LIST_FUNNEL_KEY
} from "@/common/navigation/navigationPath";
import { updateNestedState } from "@/common/utils/update";
import { ChangeEvent, useState } from "react";

export interface CardFunnelProps {
	onNext: () => void;
	setStep?: (step: CARD_LIST_FUNNEL_KEY) => void;
}

const CardFunnel = () => {
	const [cardList, setCardList] = useState<CardInfo[]>(TEMP_CARD_LIST);
	const [newCard, setNewCard] = useState<CardInfo>(
		makeNewCard(cardList.length)
	);

	const [Funnel, setStep] = useFunnel(
		extractNonEmptyArrayKeys(navigationPath.ADD_CARD_FUNNEL)
	);

	const onChangeCardInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewCard((prev) => updateNestedState(prev, name, value));
	};

	return (
		<Funnel>
			<Funnel.Step name='CARD_LIST'>
				<CardList cardList={cardList} onNext={() => setStep("ADD_CARD")} />
			</Funnel.Step>
			<Funnel.Step name='ADD_CARD'>
				<AddCard
					card={newCard}
					onNext={() => {
						setStep("ADD_CARD_SUCCESS");
					}}
					onChange={onChangeCardInput}
					setCard={setNewCard}
				/>
			</Funnel.Step>
			<Funnel.Step name='ADD_CARD_SUCCESS'>
				<SuccessAddCard
					card={cardList[cardList.length - 1]}
					onNext={() => {
						setStep("CARD_LIST");
						setCardList([...cardList, newCard]);
						setNewCard(makeNewCard(cardList.length));
					}}
					onChange={onChangeCardInput}
				/>
			</Funnel.Step>
		</Funnel>
	);
};

export default CardFunnel;

const TEMP_CARD_LIST: CardInfo[] = [
	{
		id: 1,
		bankName: "포코카드",
		cardNumber: {
			first: "1111",
			second: "2222",
			third: "3333",
			fourth: "4444"
		},
		expirationDate: {
			month: "04",
			year: "21"
		},
		ownerName: "SUN",
		securityCode: "123",
		password: {
			first: "1",
			second: "2"
		},
		cardName: "엄카"
	},
	{
		id: 2,
		bankName: "현석카드",
		cardNumber: {
			first: "1111",
			second: "2222",
			third: "3333",
			fourth: "4444"
		},
		expirationDate: {
			month: "04",
			year: "21"
		},
		ownerName: "SUN",
		securityCode: "123",
		password: {
			first: "1",
			second: "2"
		},
		cardName: "법카"
	}
];
