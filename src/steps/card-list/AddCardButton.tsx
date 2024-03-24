import { CSSProperties } from 'react';
import { useAddCardMachineActorRef } from 'src/machines/addCardMachine';

export interface AddCardButtonProps {
	styles?: {
		container?: CSSProperties;
		cardBox?: CSSProperties;
		plus?: CSSProperties;
		emptyCard?: CSSProperties;
	};
}

export default function AddCardButton({ styles }: AddCardButtonProps) {
	const { send } = useAddCardMachineActorRef();

	const handleClickAddCard = () => {
		send({ type: 'GO_TO_FORM' });
	};

	return (
		<div className="card-list-item" style={styles?.container}>
			<button className="card-box" onClick={handleClickAddCard} data-testid="add-card-button" style={styles?.cardBox}>
				<div className="empty-card small-card" style={styles?.emptyCard}>
					<div className="add-card" style={styles?.plus}>
						+
					</div>
				</div>
			</button>
		</div>
	);
}
