import { useId, ChangeEvent, useState } from 'react';

import { useAddCardMachineActorRef, useAddCardMachineSelector } from 'src/machines/addCardMachine';
import REGEX from 'src/constants/regex';
import Tooltip from 'src/components/common/Tooltip';
import { useAutoFocus } from 'src/hooks/useAutoFocus';
import { AUTO_FOCUS_INDEX } from 'src/constants/auto-focus';
import { cardSecurityCodeSchema } from 'src/schema/cardInfoSchema';

interface CardSecurityCodeInputProps {
	maxLength?: number;
}

export default function CardSecurityCodeInput({ maxLength = 3 }: CardSecurityCodeInputProps) {
	const cardSecurityCodeInputId = useId();

	const { send } = useAddCardMachineActorRef();

	const { focusNextInput: focusCardExpirationDateInput, ref: cardSecurityCodeInputRef } =
		useAutoFocus<HTMLInputElement>(AUTO_FOCUS_INDEX.CARD_SECURITY_CODE);

	const [isCardSecurityCodeChanged, setIsCardSecurityCodeChanged] = useState(false);

	const cardSecurityCode = useAddCardMachineSelector(state => state.context.cardInfo.cardSecurityCode);

	const isCardSecurityCodeValid = cardSecurityCodeSchema.safeParse({ cardSecurityCode }).success;

	const handleCardSecurityCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formattedValue = event.target.value.replace(REGEX.EXCLUDE_NUMBER, '');

		send({
			type: 'CHANGE_FIELD',
			value: formattedValue,
			field: 'cardSecurityCode',
		});

		setIsCardSecurityCodeChanged(true);

		if (formattedValue.length === maxLength) {
			focusCardExpirationDateInput();
		}
	};

	return (
		<div className="input-container">
			<label className="input-title" htmlFor={cardSecurityCodeInputId}>
				보안코드(CVC/CVV)
			</label>
			<div className="flex-align-center gap-16">
				<input
					type="password"
					className="input-basic w-25"
					value={cardSecurityCode}
					onChange={handleCardSecurityCodeChange}
					id={cardSecurityCodeInputId}
					data-testid="card-security-code"
					ref={cardSecurityCodeInputRef}
					maxLength={maxLength}
				/>
				<Tooltip description="카드 뒷면에 있는 3자리 숫자입니다.">
					<img src="/question.png" alt="notice" />
				</Tooltip>
			</div>
			{!isCardSecurityCodeValid && isCardSecurityCodeChanged && (
				<div className="input-error">보안 코드를 확인해주세요.</div>
			)}
		</div>
	);
}
