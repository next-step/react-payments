import { ChangeEvent } from 'react';

interface CardSecurityCodeInputProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	maxLength: number;
	id?: string;
}

export default function CardOwnerNameInput(props: CardSecurityCodeInputProps) {
	return (
		<div className="input-container">
			<div className="input-label-box">
				<label className="input-title" htmlFor={props.id}>
					카드 소유자 이름(선택)
				</label>
				<div className="input-title">{`${props.value.length} / ${props.maxLength}`}</div>
			</div>
			<input placeholder="카드에 표시된 이름과 동일하게 입력하세요." className="input-basic" {...props} />
		</div>
	);
}
