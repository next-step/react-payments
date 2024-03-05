import { ChangeEvent } from 'react';

interface CardExpirationDateInputProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	id?: string;
}

export default function CardExpirationDateInput(props: CardExpirationDateInputProps) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={props.id}>
				만료일
			</label>
			<input placeholder="MM / YY" className="input-basic" {...props} />
		</div>
	);
}
