import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/state/addCardMachine.ts';
import SelectCardCompanyItem from 'src/components/SelectCardCompanyItem.tsx';
import { CARD_COMPANY_LIST } from 'src/constants/card.ts';

export default function SelectCardCompanyModal() {
	const { send } = useAddCardMachineActorRef();

	const isStateSelectCardCompany = useAddCardMachineSelector(state => state.matches('AddCardForm.selectCardCompany'));

	const handleDimmedClick = () => {
		send({ type: 'TOGGLE' });
	};

	if (isStateSelectCardCompany) {
		return (
			<div className="modal-dimmed" onClick={handleDimmedClick} data-testid="modal-dimmed">
				<div className="modal" data-testid="company-modal">
					<div className="card-item-grid">
						{CARD_COMPANY_LIST.map(card => (
							<SelectCardCompanyItem key={card.code} {...card} />
						))}
					</div>
				</div>
			</div>
		);
	}

	return null;
}
