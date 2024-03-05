import { FormEvent } from 'react';

import CardImage from 'src/components/CardImage.tsx';
import CardNumberInput from 'src/components/CardNumberInput.tsx';
import CardOwnerNameInput from 'src/components/CardOwnerNameInput.tsx';
import CardExpirationDateInput from 'src/components/CardExpirationDateInput.tsx';
import CardSecurityCodeInput from 'src/components/CardSecurityCodeInput.tsx';
import CardPasswordInput from 'src/components/CardPasswordInput.tsx';

import useCardNumberInput from 'src/hooks/useCardNumberInput.ts';
import useCardOwnerNameInput from 'src/hooks/useCardOwnerNameInput.ts';
import useCardExpirationDateInput from 'src/hooks/useCardExpirationDateInput.ts';
import useCardSecurityCodeInput from 'src/hooks/useCardSecurityCodeInput.ts';
import useCardPasswordInput from 'src/hooks/useCardPasswordInput.ts';

interface AddCardFormProps {
	onSubmit: (payload: {
		cardNumber: string;
		cardOwnerName: string;
		expirationDate: string;
		cardSecurityCode: string;
		password: string;
	}) => void;
	onClickBack: () => void;
}

export default function AddCardForm({ onSubmit, onClickBack }: AddCardFormProps) {
	const {
		firstSegment,
		handleFirstSegmentChange,
		handleFourthSegmentChange,
		handleSecondSegmentChange,
		handleThirdSegmentChange,
		fourthSegmentInputRef,
		secondSegmentInputRef,
		secondSegment,
		thirdSegmentInputRef,
		thirdSegment,
		fourthSegment,
		segmentLength,
		id: cardNumberInputId,
	} = useCardNumberInput();

	const { cardOwnerName, handleCardOwnerNameChange, maxLength, id: cardOwnerNameInputId } = useCardOwnerNameInput();

	const { handleExpirationDateChange, expirationDate, id: cardExpirationDateInputId } = useCardExpirationDateInput();

	const { cardSecurityCode, handleCardSecurityCodeChange, id: cardSecurityCodeInputId } = useCardSecurityCodeInput();

	const {
		firstPassword,
		handleFirstPasswordChange,
		secondPassword,
		handleSecondPasswordChange,
		secondPasswordInputRef,
		segmentMaxLength,
		id: cardPasswordInputId,
	} = useCardPasswordInput();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		onSubmit({
			cardNumber: `${firstSegment}-${secondSegment}-${thirdSegment}-${fourthSegment}`,
			cardOwnerName,
			expirationDate,
			cardSecurityCode,
			password: `${firstPassword}${secondPassword}`,
		});
	};

	return (
		<div>
			<div className="header-box">
				<button type="button" onClick={onClickBack}>
					<img src="/back.png" alt="뒤로가기" />
				</button>
				<h2 className="page-title">카드 추가</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<CardImage
					firstSegment={firstSegment}
					secondSegment={secondSegment}
					thirdSegment={thirdSegment}
					fourthSegment={fourthSegment}
					expirationDate={expirationDate}
					cardOwnerName={cardOwnerName}
				/>
				<CardNumberInput
					id={cardNumberInputId}
					firstSegment={firstSegment}
					handleFirstSegmentChange={handleFirstSegmentChange}
					handleFourthSegmentChange={handleFourthSegmentChange}
					handleSecondSegmentChange={handleSecondSegmentChange}
					handleThirdSegmentChange={handleThirdSegmentChange}
					fourthSegmentInputRef={fourthSegmentInputRef}
					secondSegmentInputRef={secondSegmentInputRef}
					secondSegment={secondSegment}
					thirdSegmentInputRef={thirdSegmentInputRef}
					thirdSegment={thirdSegment}
					fourthSegment={fourthSegment}
					segmentLength={segmentLength}
				/>
				<CardOwnerNameInput
					cardOwnerName={cardOwnerName}
					handleCardOwnerNameChange={handleCardOwnerNameChange}
					maxLength={maxLength}
					id={cardOwnerNameInputId}
				/>
				<CardExpirationDateInput
					expirationDate={expirationDate}
					handleExpirationDateChange={handleExpirationDateChange}
					id={cardExpirationDateInputId}
				/>
				<CardSecurityCodeInput
					cardSecurityCode={cardSecurityCode}
					handleCardSecurityCodeChange={handleCardSecurityCodeChange}
					id={cardSecurityCodeInputId}
				/>
				<CardPasswordInput
					id={cardPasswordInputId}
					firstPassword={firstPassword}
					handleFirstPasswordChange={handleFirstPasswordChange}
					secondPassword={secondPassword}
					handleSecondPasswordChange={handleSecondPasswordChange}
					secondPasswordInputRef={secondPasswordInputRef}
					segmentMaxLength={segmentMaxLength}
				/>
				<div className="button-box">
					<button type="submit" className="button-text">
						다음
					</button>
				</div>
			</form>
		</div>
	);
}
