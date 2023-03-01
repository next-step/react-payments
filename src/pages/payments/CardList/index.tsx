import { Fragment } from 'react';
import { CardListType } from 'types/payments';
import Card from 'components/common/Card';
import {
	usePaymentsDispatch,
	usePaymentsState,
} from 'modules/payments/PaymentsContext';
import { useNavigate } from 'react-router';
import { STEP } from 'constants/Payments';
import {
	SelectedCardInfo,
	SET_SELECTED_CARD,
} from 'modules/payments/PaymentsActionType';

const CardList = () => {
	const { cardList } = usePaymentsState();
	const dispatch = usePaymentsDispatch();
	const navigation = useNavigate();

	const handleCardClick = (selectedCard: SelectedCardInfo) => {
		dispatch({ type: SET_SELECTED_CARD, selectedCard });
	};

	const handleCardAddClick = () => navigation(STEP.REGISTER_CARD);

	return (
		<>
			<h2>카드 목록</h2>
			<div className="root">
				<div className="app flex-column-center">
					<div className="flex-center">
						<h2 className="page-title mb-10">보유 카드</h2>
					</div>

					{cardList.map((card: CardListType) => {
						return (
							<Fragment key={card.id}>
								<Card
									input={card}
									backgroundColor={card?.backgroundColor}
									onClick={() => handleCardClick(card)}
								/>
								<span className="card-nickname">{card?.nickname}</span>
							</Fragment>
						);
					})}

					<Card onClick={handleCardAddClick} />
				</div>
			</div>
		</>
	);
};

export default CardList;
