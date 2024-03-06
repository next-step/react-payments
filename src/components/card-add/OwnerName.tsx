import Input from '../Input';

import updateValidValue from '../../utils/updateValidValue';

import {OWNER_NAME_LIMIT} from '../../constants/limit';
import {OWNER_NAME_PLACEHOLDER} from '../../constants/placeHolder';

type OwnerNameProps = {
	ownerName: string;
	setOwnerName: (value: string) => void;
};

export default function OwnerName({ownerName, setOwnerName}: OwnerNameProps) {
	const handleChangeOwnerName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;

		updateValidValue({
			limit: OWNER_NAME_LIMIT,
			setter: setOwnerName,
			value,
			isMonth: false,
			isNumber: false,
		});
	};

	return (
		<div className='input-container'>
			<div className='input-group'>
				<span className='input-title'>카드 소유자 이름(선택)</span>
				<span className='input-title'>{ownerName.length} / {OWNER_NAME_LIMIT}</span>
			</div>
			<Input
				variant='basic'
				type='text'
				placeholder={OWNER_NAME_PLACEHOLDER}
				value={ownerName}
				onChange={handleChangeOwnerName}
			/>
		</div>
	);
}
