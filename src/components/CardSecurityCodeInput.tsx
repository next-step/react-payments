import TextInput, { TextInputProps } from 'src/components/TextInput.tsx';

export default function CardSecurityCodeInput(props: Omit<TextInputProps, 'type'>) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={props.id}>
				보안코드(CVC/CVV)
			</label>
			<TextInput type="password" className="w-50" {...props} />
		</div>
	);
}
