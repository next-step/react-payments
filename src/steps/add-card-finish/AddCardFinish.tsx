import { useAddCardMachineSelector } from 'src/machines/addCardMachine.ts';
import CardImage from 'src/components/common/CardImage.tsx';
import CardNicknameForm from 'src/steps/add-card-finish/CardNicknameForm.tsx';

export default function AddCardFinish() {
	const {
		cardNumberFirstSegment,
		cardNumberSecondSegment,
		cardNumberThirdSegment,
		cardNumberFourthSegment,
		cardOwnerName,
		cardExpirationDate,
		cardCompanyCode,
	} = useAddCardMachineSelector(state => state.context.selectedCard);

	const isStateAddCardFinish = useAddCardMachineSelector(state => state.matches('AddCardFinish'));

	if (isStateAddCardFinish) {
		return (
			<div className="flex-column-center h-100">
				<div className="flex-center">
					<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
				</div>
				<CardImage
					size="big"
					cardNumberFirstSegment={cardNumberFirstSegment}
					cardNumberSecondSegment={cardNumberSecondSegment}
					cardNumberThirdSegment={cardNumberThirdSegment}
					cardNumberFourthSegment={cardNumberFourthSegment}
					cardOwnerName={cardOwnerName}
					cardExpirationDate={cardExpirationDate}
					cardCompanyCode={cardCompanyCode}
				/>
				<CardNicknameForm />
			</div>
		);
	}

	return null;
}
