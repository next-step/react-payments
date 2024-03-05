import useCardPasswordInput from 'src/hooks/useCardPasswordInput.ts';

interface CardPasswordInputProps extends ReturnType<typeof useCardPasswordInput> {
	id?: string;
}

export default function CardPasswordInput({
	firstPassword,
	handleFirstPasswordChange,
	secondPassword,
	handleSecondPasswordChange,
	secondPasswordInputRef,
	id,
	segmentMaxLength,
}: CardPasswordInputProps) {
	return (
		<div className="input-container">
			<label className="input-title" htmlFor={id}>
				카드 비밀번호
			</label>
			<div className="input-box">
				<input
					data-testid="first-password"
					type="password"
					className="input-basic w-15"
					value={firstPassword}
					onChange={handleFirstPasswordChange}
					id={id}
					maxLength={segmentMaxLength}
				/>
				<input
					data-testid="second-password"
					type="password"
					className="input-basic w-15"
					value={secondPassword}
					onChange={handleSecondPasswordChange}
					ref={secondPasswordInputRef}
					maxLength={segmentMaxLength}
				/>
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
			</div>
		</div>
	);
}
