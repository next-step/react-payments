import { FormEvent } from 'react';

import CardNumberInput from 'src/steps/add-card-form/CardNumberInput';
import CardOwnerNameInput from 'src/steps/add-card-form/CardOwnerNameInput';
import CardExpirationDateInput from 'src/steps/add-card-form/CardExpirationDateInput';
import CardSecurityCodeInput from 'src/steps/add-card-form/CardSecurityCodeInput';
import CardPasswordInput from 'src/steps/add-card-form/CardPasswordInput';
import { useAddCardMachineSelector, useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import SelectCardCompanyModal from 'src/steps/add-card-form/SelectCardCompanyModal';
import EnteredCardImage from 'src/steps/add-card-form/EnteredCardImage';
import { useAutoFocus } from 'src/hooks/useAutoFocus';
import { AUTO_FOCUS_INDEX } from 'src/constants/auto-focus';

interface AddCardFormProps {
	cardNumberSegmentLength?: number;
	cardOwnerNameMaxLength?: number;
	cardExpirationDateMaxLength?: number;
	cardSecurityCodeMaxLength?: number;
	cardPasswordSegmentLength?: number;
}

export default function AddCardForm({
	cardNumberSegmentLength = 4,
	cardOwnerNameMaxLength = 30,
	cardExpirationDateMaxLength = 7,
	cardSecurityCodeMaxLength = 3,
	cardPasswordSegmentLength = 1,
}: AddCardFormProps) {
	const { send } = useAddCardMachineActorRef();

	const { ref: nextButtonRef } = useAutoFocus<HTMLButtonElement>(AUTO_FOCUS_INDEX.NEXT_BUTTON);

	const isStateAddCardForm = useAddCardMachineSelector(state => state.matches('AddCardForm'));

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		send({
			type: 'ADD_CARD',
			maxLengths: {
				cardNumberFirstSegment: cardNumberSegmentLength,
				cardNumberSecondSegment: cardNumberSegmentLength,
				cardNumberThirdSegment: cardNumberSegmentLength,
				cardNumberFourthSegment: cardNumberSegmentLength,
				cardExpirationDate: cardExpirationDateMaxLength,
				cardSecurityCode: cardSecurityCodeMaxLength,
				cardPasswordFirstDigit: cardPasswordSegmentLength,
				cardPasswordSecondDigit: cardPasswordSegmentLength,
			},
		});
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
						<EnteredCardImage />
						<CardNumberInput segmentLength={cardNumberSegmentLength} />
						<CardExpirationDateInput maxLength={cardExpirationDateMaxLength} />
						<CardOwnerNameInput maxLength={cardOwnerNameMaxLength} />
						<CardSecurityCodeInput maxLength={cardSecurityCodeMaxLength} />
						<CardPasswordInput segmentMaxLength={cardPasswordSegmentLength} />
						<div className="button-box">
							<button type="submit" className="button-text" data-testid="form-next" ref={nextButtonRef}>
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
