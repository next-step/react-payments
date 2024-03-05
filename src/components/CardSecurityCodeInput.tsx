import { ChangeEvent } from 'react';

interface CardSecurityCodeInputProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	value: string;
}

export default function CardSecurityCodeInput(props: CardSecurityCodeInputProps) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={props.id}>
				보안코드(CVC/CVV)
			</label>
			<input type="password" className="input-basic w-50" {...props} />
		</div>
	);
}
