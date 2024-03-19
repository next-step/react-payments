import { useAddCardMachineActorRef } from 'src/machines/addCardMachine';

export default function AddCardButton() {
	const { send } = useAddCardMachineActorRef();

	const handleClickAddCard = () => {
		send({ type: 'GO_TO_FORM' });
	};

	return (
		<div className="card-list-item">
			<button className="card-box " onClick={handleClickAddCard} data-testid="add-card-button">
				<div className="empty-card small-card">
					<div className="add-card">+</div>
				</div>
			</button>
		</div>
	);
}
