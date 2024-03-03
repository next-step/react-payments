import TextInput, { TextInputProps } from 'src/components/TextInput.tsx';

export default function CardOwnerNameInput(props: Omit<TextInputProps, 'type' | 'placeholder'>) {
	return (
		<div className="input-container">
			<div className="input-label-box">
				<label className="input-title" htmlFor={props.id}>
					카드 소유자 이름(선택)
				</label>
				<div>{`${props.value?.toString().length || '0'} / ${props.maxLength}`}</div>
			</div>
			<TextInput placeholder="카드에 표시된 이름과 동일하게 입력하세요." {...props} />
		</div>
	);
}
