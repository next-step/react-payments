import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine';
import CardListItem from 'src/steps/card-list/CardListItem';

export default function CardList() {
	const { send } = useAddCardMachineActorRef();

	const cardList = useAddCardMachineSelector(state => state.context.cardList);

	const isStateCardList = useAddCardMachineSelector(state => state.matches('CardList'));

	const handleClickAddCard = () => {
		send({ type: 'GO_TO_FORM' });
	};

	if (isStateCardList) {
		return (
			<div className="h-100 flex-column-center">
				<div className="flex-center">
					<h2 className="page-title mb-10">보유 카드</h2>
				</div>
				<div className="overflow-auto w-100 flex-column-align-center gap-16" data-testid="card-select">
					<div className="card-list-item">
						<button className="card-box " onClick={handleClickAddCard} data-testid="add-card-button">
							<div className="empty-card small-card">
								<div className="add-card">+</div>
							</div>
						</button>
					</div>
					{cardList.map(card => (
						<CardListItem key={card.id} {...card} />
					))}
				</div>
			</div>
		);
	}

	return null;
}
