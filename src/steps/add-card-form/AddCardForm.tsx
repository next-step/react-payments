import { FormEvent } from 'react';

import CardNumberInput from 'src/steps/add-card-form/CardNumberInput';
import CardOwnerNameInput from 'src/steps/add-card-form/CardOwnerNameInput';
import CardExpirationDateInput from 'src/steps/add-card-form/CardExpirationDateInput';
import CardSecurityCodeInput from 'src/steps/add-card-form/CardSecurityCodeInput';
import CardPasswordInput from 'src/steps/add-card-form/CardPasswordInput';
import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import SelectCardCompanyModal from 'src/steps/add-card-form/SelectCardCompanyModal';
import EnteredCardImage from 'src/steps/add-card-form/EnteredCardImage';
import NextButton from 'src/steps/add-card-form/NextButton';
import AutoFocusProvider from 'src/components/common/AutoFocus';
import { CardInfo } from 'src/machines/addCardMachine';

export interface AddCardFormProps {
	onSubmit?: (card: CardInfo) => void;
}

export default function AddCardForm({ onSubmit }: AddCardFormProps) {
	const { send } = useAddCardMachineActorRef();

	const isStateAddCardForm = useAddCardMachineSelector(state => state.matches('AddCardForm'));

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		send({
			type: 'ADD_CARD',
			onSubmit,
		});
	};

	const handleClickBack = () => {
		send({ type: 'BACK' });
	};

	if (isStateAddCardForm) {
		return (
			<AutoFocusProvider>
				<div>
					<div className="header-box">
						<button type="button" onClick={handleClickBack} data-testid="back-to-select">
							<img src="/back.png" alt="뒤로가기" />
						</button>
						<h2 className="page-title">카드 추가</h2>
					</div>
					<form onSubmit={handleSubmit} data-testid="card-form">
						<EnteredCardImage />
						<CardNumberInput />
						<CardExpirationDateInput />
						<CardOwnerNameInput />
						<CardSecurityCodeInput />
						<CardPasswordInput />
						<NextButton />
					</form>
				</div>
				<SelectCardCompanyModal />
			</AutoFocusProvider>
		);
	}

	return null;
}
