import { useAddCardMachineActorRef } from 'src/state/addCardMachine.ts';
import { CardCompanyData } from 'src/constants/card.ts';

export default function SelectCardCompanyItem({ code, name, className }: CardCompanyData) {
	const { send } = useAddCardMachineActorRef();

	const handleSelectCardCompany = () => {
		send({ type: 'CHANGE_FIELD', value: code, field: 'cardCompanyCode' });
		send({ type: 'TOGGLE' });
	};

	return (
		<button
			className="modal-item-container"
			type="button"
			onClick={handleSelectCardCompany}
			data-testid={`card-company-button-${code}`}
		>
			<div className={`modal-item-dot ${className}`}></div>
			<span className="modal-item-name">{name}</span>
		</button>
	);
}
