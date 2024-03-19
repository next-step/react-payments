import { useAddCardMachineSelector } from 'src/machines/addCardMachine';
import CardListItem, { CardListItemProps } from 'src/steps/card-list/CardListItem';
import AddCardButton from 'src/steps/card-list/AddCardButton';

export interface CardListProps extends Pick<CardListItemProps, 'onDelete'> {}

export default function CardList({ onDelete }: CardListProps) {
	const cardList = useAddCardMachineSelector(state => state.context.cardList);

	const isStateCardList = useAddCardMachineSelector(state => state.matches({ CardList: 'afterInitialize' }));

	if (isStateCardList) {
		return (
			<div className="h-100 flex-column-center">
				<div className="flex-center">
					<h2 className="page-title mb-10">보유 카드</h2>
				</div>
				<div className="overflow-auto w-100 flex-column-align-center gap-16" data-testid="card-select">
					<AddCardButton />
					{cardList.map(card => (
						<CardListItem key={card.id} onDelete={onDelete} {...card} />
					))}
				</div>
			</div>
		);
	}

	return null;
}
