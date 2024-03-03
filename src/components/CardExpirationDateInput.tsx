import TextInput, { TextInputProps } from 'src/components/TextInput.tsx';

export default function CardExpirationDateInput(props: Omit<TextInputProps, 'placeholder' | 'type'>) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={props.id}>
				만료일
			</label>
			<TextInput placeholder="MM / YY" {...props} />
		</div>
	);
}
