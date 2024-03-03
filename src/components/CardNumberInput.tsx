import TextInput, { TextInputProps } from 'src/components/TextInput.tsx';

export default function CardNumberInput(props: TextInputProps) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={props.id}>
				카드 번호
			</label>
			<TextInput {...props} />
		</div>
	);
}
