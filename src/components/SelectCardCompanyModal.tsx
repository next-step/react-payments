import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';
import SelectCardCompanyItem from 'src/components/SelectCardCompanyItem.tsx';
import { CARD_COMPANY_LIST } from 'src/constants/card.ts';

export default function SelectCardCompanyModal() {
	const [state, set] = useAddCardMachineActor();

	const handleDimmedClick = () => {
		set({ type: 'TOGGLE' });
	};

	if (state.matches('form.selectCardCompany')) {
		return (
			<div className="modal-dimmed" onClick={handleDimmedClick}>
				<div className="modal">
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
