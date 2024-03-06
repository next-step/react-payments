import Input from '../Input';

import updateValidValue from '../../utils/updateValidValue';

import {SECURITY_CODE_LIMIT} from '../../constants/limit';

type SecurityCoderops = {
	securityCode: string;
	setSecurityCode: (value: string) => void;
};

export default function SecurityCode({securityCode, setSecurityCode}: SecurityCoderops) {
	const handleChangeSecurityCode = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;

		updateValidValue({
			limit: SECURITY_CODE_LIMIT,
			setter: setSecurityCode,
			value,
			isMonth: false,
			isNumber: true,
		});
	};

	return (
		<div className='input-container'>
			<span className='input-title'>보안코드(CVC/CVV)</span>
			<Input
				variant='basic'
				className='w-25'
				type='password'
				value={securityCode}
				onChange={handleChangeSecurityCode}
			/>
		</div>
	);
}
