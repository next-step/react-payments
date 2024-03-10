import { Input, InputProps } from '../../../../components/ui-kit/Input';

interface CardExpiredDateInputProps {
	value: string;
	onChange: InputProps['onChange'];
}

export default function CardExpiredDateInput({
	value,
	onChange,
}: CardExpiredDateInputProps) {
	return (
		<Input.Wrapper>
			<Input
				variant="basic"
				value={value}
				onChange={onChange}
				placeholder="MM/YY"
				width="40%"
				label={<Input.Label label="만료일" />}
			/>
		</Input.Wrapper>
	);
}
