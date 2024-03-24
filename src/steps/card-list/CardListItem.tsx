import { CSSProperties } from 'react';

import { CardInfoWithId } from 'src/types/card.type';
import { useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import CardImage, { CardImageProps } from 'src/components/common/CardImage';

export interface CardListItemProps extends CardInfoWithId {
	onDelete?: (id: string) => void;
	styles?: {
		container?: CSSProperties;
		cardImage?: CardImageProps['styles'];
		nickname?: CSSProperties;
		deleteButton?: CSSProperties;
	};
}

export default function CardListItem({ onDelete, styles, ...card }: CardListItemProps) {
	const { send } = useAddCardMachineActorRef();

	const handleClickCard = () => {
		send({ type: 'SELECT_CARD', value: card });
	};

	const handleDeleteCard = () => {
		if (confirm('정말 삭제하시겠습니까?')) {
			send({ type: 'DELETE_CARD', value: card.id, onDelete });
		}
	};

	return (
		<div className="card-list-item cursor-pointer w-fit" style={styles?.container}>
			<CardImage {...card} onClick={handleClickCard} styles={styles?.cardImage} />
			<span className="card-nickname" style={styles?.nickname}>
				{card.cardNickname}
			</span>
			<button className="delete-card" onClick={handleDeleteCard} style={styles?.deleteButton}>
				✕
			</button>
		</div>
	);
}
