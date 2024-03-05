import React from 'react';

interface CardPasswordInputProps {
	firstPassword: string;
	handleFirstPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	secondPassword: string;
	handleSecondPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	secondPasswordInputRef: React.RefObject<HTMLInputElement>;
}

export default function CardPasswordInput({
	firstPassword,
	handleFirstPasswordChange,
	secondPassword,
	handleSecondPasswordChange,
	secondPasswordInputRef,
}: CardPasswordInputProps) {
	return (
		<div className="input-container">
			<span className="input-title">카드 비밀번호</span>
			<div className="input-box">
				<input
					data-testid="first-password"
					type="password"
					className="input-basic w-15"
					value={firstPassword}
					onChange={handleFirstPasswordChange}
				/>
				<input
					data-testid="second-password"
					type="password"
					className="input-basic w-15"
					value={secondPassword}
					onChange={handleSecondPasswordChange}
					ref={secondPasswordInputRef}
				/>
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
				<input readOnly value=" " type="password" className="input-basic w-15 password-readonly" />
			</div>
		</div>
	);
}
