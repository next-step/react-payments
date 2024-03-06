import { FormEvent } from 'react';

import CardImage from 'src/components/CardImage.tsx';
import CardNumberInput from 'src/components/CardNumberInput.tsx';
import CardOwnerNameInput from 'src/components/CardOwnerNameInput.tsx';
import CardExpirationDateInput from 'src/components/CardExpirationDateInput.tsx';
import CardSecurityCodeInput from 'src/components/CardSecurityCodeInput.tsx';
import CardPasswordInput from 'src/components/CardPasswordInput.tsx';
import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';

export default function AddCardForm() {
	const [state, send] = useAddCardMachineActor();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		send({ type: 'NEXT' });
	};

	const handleClickBack = () => {
		send({ type: 'BACK' });
	};

	if (state.matches('form')) {
		return (
			<div>
				<div className="header-box">
					<button type="button" onClick={handleClickBack}>
						<img src="/back.png" alt="뒤로가기" />
					</button>
					<h2 className="page-title">카드 추가</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<CardImage />
					<CardNumberInput />
					<CardOwnerNameInput />
					<CardExpirationDateInput />
					<CardSecurityCodeInput />
					<CardPasswordInput />
					<div className="button-box">
						<button type="submit" className="button-text">
							다음
						</button>
					</div>
				</form>
			</div>
		);
	}

	return null;
}
