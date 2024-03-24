import { CSSProperties } from 'react';

import { useAddCardMachineSelector } from 'src/machines/addCardMachine';
import CardListItem, { CardListItemProps } from 'src/steps/card-list/CardListItem';
import AddCardButton, { AddCardButtonProps } from 'src/steps/card-list/AddCardButton';

export interface CardListProps extends Pick<CardListItemProps, 'onDelete'> {
	styles?: {
		container?: CSSProperties;
		cardListItem?: CardListItemProps['styles'];
		addCardButton?: AddCardButtonProps['styles'];
		cardListContainer?: CSSProperties;
		title?: CSSProperties;
	};
}

export default function CardList({ onDelete, styles }: CardListProps) {
	const cardList = useAddCardMachineSelector(state => state.context.cardList);

	const isStateCardList = useAddCardMachineSelector(state => state.matches({ CardList: 'afterInitialize' }));

	if (isStateCardList) {
		return (
			<div className="h-100 flex-column-center" style={styles?.container}>
				<div className="flex-center">
					<h2 className="page-title mb-10" style={styles?.title}>
						보유 카드
					</h2>
				</div>
				<div
					className="overflow-auto w-100 flex-column-align-center gap-16"
					data-testid="card-select"
					style={styles?.cardListContainer}
				>
					<AddCardButton styles={styles?.addCardButton} />
					{cardList.map(card => (
						<CardListItem key={card.id} onDelete={onDelete} styles={styles?.cardListItem} {...card} />
					))}
				</div>
			</div>
		);
	}

	return null;
}
