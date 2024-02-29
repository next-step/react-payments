import CardBox from '../CardBox';
import Card from '../Card';
import Button from '../card-add/Button';
import {
	FIRST_NUMBER, FOURTH_NUMBER, SECOND_NUMBER, THIRD_NUMBER,
} from '../../constants/cardNumber';
import {MONTH, YEAR} from '../../constants/expirationDate';

export default function CompletedCard() {
	const cardNumber = {
		[FIRST_NUMBER]: '1111',
		[SECOND_NUMBER]: '1111',
		[THIRD_NUMBER]: '1111',
		[FOURTH_NUMBER]: '1111',
	};

	const expirationDate = {
		[MONTH]: '12',
		[YEAR]: '23',
	};
	return (
		<div className='root'>
			<div className='app flex-column-center'>
				<div className='flex-center'>
					<h2 className='page-title mb-10'>카드등록이 완료되었습니다.</h2>
				</div>
				<CardBox>
					<Card
						variant='big'
						cardNumber={cardNumber}
						ownerName='YUJO'
						expirationDate={expirationDate}
					/>
				</CardBox>
				<div className='input-container flex-center w-100'>
					<input
						className='input-underline w-75'
						type='text'
						placeholder='카드의 별칭을 입력해주세요.'
					/>
				</div>
				<Button
					className='mt-45'
					location='/'
					text='다음'
				/>
			</div>
		</div>
	);
}
