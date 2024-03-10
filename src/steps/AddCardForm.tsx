import { FormEvent } from 'react';

import CardImage from 'src/components/common/CardImage.tsx';
import CardNumberInput from 'src/components/add-card-form/CardNumberInput.tsx';
import CardOwnerNameInput from 'src/components/add-card-form/CardOwnerNameInput.tsx';
import CardExpirationDateInput from 'src/components/add-card-form/CardExpirationDateInput.tsx';
import CardSecurityCodeInput from 'src/components/add-card-form/CardSecurityCodeInput.tsx';
import CardPasswordInput from 'src/components/add-card-form/CardPasswordInput.tsx';
import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/machines/addCardMachine.ts';
import SelectCardCompanyModal from 'src/components/add-card-form/SelectCardCompanyModal.tsx';

export default function AddCardForm() {
	const { send } = useAddCardMachineActorRef();

	const {
		cardCompanyCode,
		cardOwnerName,
		cardNumberFirstSegment,
		cardNumberSecondSegment,
		cardNumberThirdSegment,
		cardNumberFourthSegment,
		cardExpirationDate,
	} = useAddCardMachineSelector(state => state.context.cardInfo);

	const isStateAddCardForm = useAddCardMachineSelector(state => state.matches('AddCardForm'));

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		send({ type: 'ADD_CARD' });
	};

	const handleClickBack = () => {
		send({ type: 'BACK' });
	};

	if (isStateAddCardForm) {
		return (
			<>
				<div>
					<div className="header-box">
						<button type="button" onClick={handleClickBack} data-testid="back-to-select">
							<img src="/back.png" alt="뒤로가기" />
						</button>
						<h2 className="page-title">카드 추가</h2>
					</div>
					<form onSubmit={handleSubmit} data-testid="card-form">
						<CardImage
							cardCompanyCode={cardCompanyCode}
							cardOwnerName={cardOwnerName}
							cardNumberFirstSegment={cardNumberFirstSegment}
							cardNumberSecondSegment={cardNumberSecondSegment}
							cardNumberThirdSegment={cardNumberThirdSegment}
							cardNumberFourthSegment={cardNumberFourthSegment}
							cardExpirationDate={cardExpirationDate}
						/>
						<CardNumberInput />
						<CardOwnerNameInput />
						<CardExpirationDateInput />
						<CardSecurityCodeInput />
						<CardPasswordInput />
						<div className="button-box">
							<button type="submit" className="button-text" data-testid="form-next">
								다음
							</button>
						</div>
					</form>
				</div>
				<SelectCardCompanyModal />
			</>
		);
	}

	return null;
}
