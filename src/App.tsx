import {useState} from 'react';

type InputProps = {
	className: string;
	type: string;
	value: string;
	placeholder?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({className, type, value, placeholder, onChange}: InputProps) {
	return (
		<input
			className={className}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}

export default function App() {
	const [cardNumber, setCardNumber] = useState('');

	const setNumber = (limit: number, setter: (value: string) => void, value: string) => {
		// 자리 유효성 검사

		// 숫자 유효성 검사

		// 값 변경
		console.log(value);
		setter(value);
	};

	const handleChangeCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;

		setNumber(
			4,
			setCardNumber,
			value,
		);
	};

	return (
		<div>
			<div className='root'>
				<div className='app'>
					<h2 className='page-title'>카드 추가</h2>
					<div className='card-box'>
						<div className='small-card'>
							<div className='card-top'>
								<span className='card-text'>클린카드</span>
							</div>
							<div className='card-middle'>
								<div className='small-card__chip'></div>
							</div>
							<div className='card-bottom'>
								<div className='card-bottom__number'>
									<span className='card-text'>{cardNumber} - 2222 - oooo - oooo</span>
								</div>
								<div className='card-bottom__info'>
									<span className='card-text'>YUJO</span>
									<span className='card-text'>12 / 23</span>
								</div>
							</div>
						</div>
					</div>
					<div className='input-container'>
						<span className='input-title'>카드 번호</span>
						<div className='input-box'>
							<Input
								className='input-basic'
								type='text'
								value={cardNumber}
								onChange={handleChangeCardNumber}
							/>
						</div>
					</div>
					<div className='input-container'>
						<span className='input-title'>만료일</span>
						<div className='input-box w-50'>
							{/* <input
								className='input-basic'
								type='text'
								placeholder='MM'
								value='12'
							/>
							<input
								className='input-basic'
								type='text'
								placeholder='YY'
								value='23'
							/> */}
						</div>
					</div>
					<div className='input-container'>
						<span className='input-title'>카드 소유자 이름(선택)</span>
						{/* <input type='text' className='input-basic' value='YUJO' /> */}
					</div>
					<div className='input-container'>
						<span className='input-title'>보안코드(CVC/CVV)</span>
						{/* <input className='input-basic w-25' type='password' value='111' /> */}
					</div>
					<div className='input-container'>
						<span className='input-title'>카드 비밀번호</span>
						{/* <input className='input-basic w-15' type='password' value='1' /> */}
						{/* <input className='input-basic w-15' type='password' value='1' /> */}
						{/* <input className='input-basic w-15' type='password' value='1' /> */}
						{/* <input className='input-basic w-15' type='password' value='1' /> */}
					</div>
					<div className='button-box'>
						<span className='button-text'>다음</span>
					</div>
				</div>
			</div>
		</div>
	);
}

