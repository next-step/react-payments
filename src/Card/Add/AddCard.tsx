import { useInputState } from "@/common/hooks";
import BottomFixedButton from "@/common/ui/Button/BottomFixedButton";
import FlexibleInput from "@/common/ui/FlexibleInput/FlexibleInput";
import Header from "@/common/ui/Header/Header";
import Text from "@/common/ui/Text/Text";
import { maskStringAfterIndex } from "@/common/utils";
import { convertObjectValuesToString } from "@/common/utils/object";
import styled from "@emotion/styled";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
	CARD_EXPIRATION_DATE_LENGTH,
	CARD_NUMBER_LENGTH,
	CARD_OWNER_NAME_LENGTH,
	CARD_PASSWORD_LENGTH,
	CARD_SECURITY_CODE_LENGTH
} from "../constants";
import { CardInfo } from "../types/card";
import EmptyCard from "../ui/Card/EmptyCard";
import {
	formatExpiryDate,
	onlyNumber,
	removeTrailingCharacterOnKeyDown
} from "../utils/transform";

export interface AddCardProps {
	card: CardInfo;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onNext: () => void;
	setCard: Dispatch<SetStateAction<CardInfo>>;
}

const AddCard = ({ card, onChange, onNext, setCard }: AddCardProps) => {
	const [expirationDate, onChangeExpirationDate, onKeyDownExpirationDate] =
		useInputState(
			"",
			formatExpiryDate,
			removeTrailingCharacterOnKeyDown("Backspace", "/")
		);
	const month = expirationDate.split("/")[0];
	const year = expirationDate.split("/")[1];

	const [securityCode, onChangeSecurityCode] = useInputState("", onlyNumber);

	const onClickNext = () => {
		setCard((prev) => ({
			...prev,
			expirationDate: { month, year },
			securityCode
		}));
		onNext();
	};

	const isAllInputFilled =
		Object.values(card.cardNumber).every(
			(value) => value.length === CARD_NUMBER_LENGTH
		) &&
		expirationDate.length === CARD_EXPIRATION_DATE_LENGTH &&
		securityCode.length === CARD_SECURITY_CODE_LENGTH &&
		card.password.first.length === CARD_PASSWORD_LENGTH &&
		card.password.second.length === CARD_PASSWORD_LENGTH;

	return (
		<Container>
			<Header showBackButton title='카드 추가' />
			<EmptyCard mode='add'>
				<EmptyCard.CardCompany text={""} />
				<EmptyCard.Chip />
				<EmptyCard.Number
					text={maskStringAfterIndex(
						convertObjectValuesToString(card.cardNumber),
						2
					)}
				/>
				<EmptyCard.Name text={card.ownerName || "NAME"} />
				<EmptyCard.ExpirationDate month={month || "MM"} year={year || "YY"} />
			</EmptyCard>
			{/** 카드 번호 */}
			<FlexibleInput>
				<FlexibleInput.Title>카드 번호</FlexibleInput.Title>
				<FlexibleInput.InputBox>
					<FlexibleInput.Input
						name='cardNumber.first'
						value={card.cardNumber.first}
						onChange={onChange}
						maxLength={CARD_NUMBER_LENGTH}
					/>
					{card.cardNumber.first.length === CARD_NUMBER_LENGTH && (
						<FlexibleInput.Separator>-</FlexibleInput.Separator>
					)}
					<FlexibleInput.Input
						type='text'
						name='cardNumber.second'
						value={card.cardNumber.second}
						onChange={onChange}
						maxLength={CARD_NUMBER_LENGTH}
					/>
					{card.cardNumber.second.length === CARD_NUMBER_LENGTH && (
						<FlexibleInput.Separator>-</FlexibleInput.Separator>
					)}
					<FlexibleInput.Input
						type='password'
						name='cardNumber.third'
						value={card.cardNumber.third}
						onChange={onChange}
						maxLength={CARD_NUMBER_LENGTH}
					/>
					{card.cardNumber.third.length === CARD_NUMBER_LENGTH && (
						<FlexibleInput.Separator>-</FlexibleInput.Separator>
					)}
					<FlexibleInput.Input
						type='password'
						name='cardNumber.fourth'
						value={card.cardNumber.fourth}
						onChange={onChange}
						maxLength={CARD_NUMBER_LENGTH}
					/>
				</FlexibleInput.InputBox>
			</FlexibleInput>
			{/** 카드 만료일 */}
			<FlexibleInput>
				<FlexibleInput.Title>만료일</FlexibleInput.Title>
				<FlexibleInput.InputBox width={50}>
					<FlexibleInput.Input
						value={expirationDate}
						onChange={onChangeExpirationDate}
						onKeyDown={onKeyDownExpirationDate}
						placeholder='MM / YY'
						maxLength={CARD_EXPIRATION_DATE_LENGTH}
					/>
				</FlexibleInput.InputBox>
			</FlexibleInput>
			{/** 카드 소유자 */}
			<FlexibleInput>
				<FlexibleInput.Title>카드 소유자(선택)</FlexibleInput.Title>
				<FlexibleInput.Count />
				<FlexibleInput.InputBox>
					<FlexibleInput.Input
						name='ownerName'
						value={card.ownerName}
						onChange={onChange}
						textAlign='left'
						maxLength={CARD_OWNER_NAME_LENGTH}
					/>
				</FlexibleInput.InputBox>
			</FlexibleInput>
			{/** 보안 코드 */}
			<FlexibleInput>
				<FlexibleInput.Title>보안 코드(CVC/CVV)</FlexibleInput.Title>
				<FlexibleInput.InputBox width={25}>
					<FlexibleInput.Input
						type='password'
						value={securityCode}
						onChange={onChangeSecurityCode}
						maxLength={CARD_SECURITY_CODE_LENGTH}
					/>
				</FlexibleInput.InputBox>
			</FlexibleInput>
			{/** 카드 비밀번호 */}
			<FlexibleInput>
				<FlexibleInput.Title>카드 비밀번호(앞 2자리)</FlexibleInput.Title>
				<PasswordWrapper>
					<FlexibleInput.Input
						type='password'
						name='password.first'
						value={card.password.first}
						onChange={onChange}
						width={15}
						maxLength={CARD_PASSWORD_LENGTH}
					/>
					<FlexibleInput.Input
						type='password'
						name='password.second'
						value={card.password.second}
						onChange={onChange}
						width={15}
						maxLength={CARD_PASSWORD_LENGTH}
					/>
					<FlexibleInput.Input
						type='password'
						readOnly
						value={"*"}
						width={15}
						maxLength={CARD_PASSWORD_LENGTH}
					/>
					<FlexibleInput.Input
						type='password'
						readOnly
						value={"*"}
						width={15}
						maxLength={CARD_PASSWORD_LENGTH}
					/>
				</PasswordWrapper>
			</FlexibleInput>
			{!!isAllInputFilled && (
				<BottomFixedButton width={20} onClick={onClickNext}>
					<Text.Span color='cyan' fontSize={14}>
						다음
					</Text.Span>
				</BottomFixedButton>
			)}
		</Container>
	);
};

export default AddCard;

const Container = styled.div`
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const PasswordWrapper = styled.div`
	display: flex;
	column-gap: 8px;
	margin-top: 0.375rem;
`;
