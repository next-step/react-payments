import { CardInfoWithId } from 'src/machines/addCardMachine';
import { useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import CardImage from 'src/components/common/CardImage';

export interface CardListItemProps extends CardInfoWithId {
	onDelete?: (id: string) => void;
}

export default function CardListItem({ onDelete, ...card }: CardListItemProps) {
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
		<div className="card-list-item cursor-pointer w-fit">
			<CardImage {...card} onClick={handleClickCard} />
			<span className="card-nickname">{card.cardNickname}</span>
			<button className="delete-card" onClick={handleDeleteCard}>
				✕
			</button>
		</div>
	);
}
