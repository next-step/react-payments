import AddCard from "@/Card/Add/AddCard";
import CardList from "@/Card/List/CardList";
import SuccessAddCard from "@/Card/Success/SuccessAddCard";
import { useManageCardContext } from "@/Card/machine/card/useCardContext";
import { useCardFunnel } from "@/Card/machine/funnel/useCardFunnel";
import { CARD_LIST_FUNNEL_KEY } from "@/common/navigation/navigationPath";

export interface CardFunnelProps {
	onNext: () => void;
	setStep?: (step: CARD_LIST_FUNNEL_KEY) => void;
}

const CardFunnel = () => {
	const [Funnel, setStep] = useCardFunnel();

	const { state, send } = useManageCardContext();

	return (
		<Funnel>
			<Funnel.Step name='CARD_LIST'>
				<CardList
					cardList={state.cards}
					onNext={() => setStep("GO_TO_ADD_CARD")}
					onClickCard={() => setStep("GO_TO_ADD_CARD_SUCCESS")}
				/>
			</Funnel.Step>
			<Funnel.Step name='ADD_CARD'>
				<AddCard
					card={state.card}
					onNext={() => {
						send({ type: "CARD_INFO_CHECK" });
						setStep("GO_TO_ADD_CARD_SUCCESS");
					}}
					onPrev={() => {
						setStep("PREV");
					}}
				/>
			</Funnel.Step>
			<Funnel.Step name='ADD_CARD_SUCCESS'>
				<SuccessAddCard
					card={state.card}
					onNext={() => {
						send({ type: "CARD_NAME_CHECK" });
						send({ type: "SAVE_CARD" });
						send({ type: "RESET_CARD" });
						setStep("GO_TO_CARD_LIST");
					}}
				/>
			</Funnel.Step>
		</Funnel>
	);
};

export default CardFunnel;
