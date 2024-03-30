import { useManageCardContext } from "@/Card/machine/card/useCardContext";
import { useInputState } from "@/common/hooks";
import useBottomSheet from "@/common/ui/BottomSheet/useBottomSheet";
import BottomFixedButton from "@/common/ui/Button/BottomFixedButton";
import FlexibleInput from "@/common/ui/FlexibleInput/FlexibleInput";
import Header from "@/common/ui/Header/Header";
import Text from "@/common/ui/Text/Text";
import { maskStringAfterIndex } from "@/common/utils";
import { convertObjectValuesToString } from "@/common/utils/object";
import styled from "@emotion/styled";
import {
	CARD_EXPIRATION_DATE_LENGTH,
	CARD_NUMBER_LENGTH,
	CARD_OWNER_NAME_LENGTH,
	CARD_PASSWORD_LENGTH,
	CARD_SECURITY_CODE_LENGTH
} from "../constants";
import { CardInfo } from "../types/card";
import Card from "../ui/Card/Card";
import EmptyCard from "../ui/Card/EmptyCard";
import CardCompanyList from "../ui/CardCompany/CardCompanyList";
import { getColorWithCompanyName } from "../utils";
import {
	formatExpiryDate,
	onlyNumber,
	removeTrailingCharacterOnKeyDown
} from "../utils/transform";

export interface AddCardProps {
	card: CardInfo;
	onNext: () => void;
	onPrev: () => void;
}

const AddCard = ({ card, onNext, onPrev }: AddCardProps) => {
	const { send } = useManageCardContext();

	const { BottomSheet, open, close } = useBottomSheet();

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
		send({ type: "CHANGE_EXPIRATION_DATE", name: "month", value: month });
		send({ type: "CHANGE_EXPIRATION_DATE", name: "year", value: year });
		send({ type: "CHANGE_SECURITY_CODE", value: securityCode });
		send({ type: "CARD_INFO_CHECK" });
		onNext();
	};

	const isAllInputFilled =
		card.companyName.length &&
		Object.values(card.cardNumber).every(
			(value) => value.length === CARD_NUMBER_LENGTH
		) &&
		expirationDate.length === CARD_EXPIRATION_DATE_LENGTH &&
		securityCode.length === CARD_SECURITY_CODE_LENGTH &&
		card.password.first.length === CARD_PASSWORD_LENGTH &&
		card.password.second.length === CARD_PASSWORD_LENGTH;

	return (
		<Container>
			<Header
				showBackButton
				title='카드 추가'
				backButtonCallback={() => {
					send({ type: "RESET_CARD" });
					onPrev();
				}}
			/>
			{!card.companyName.length && (
				<EmptyCard mode='add' onClick={open}>
					<EmptyCard.CardCompany text={`${card.companyName}`} />
					<EmptyCard.Chip />
					<EmptyCard.CardNumber
						text={maskStringAfterIndex(
							convertObjectValuesToString(card.cardNumber),
							2
						)}
					/>
					<EmptyCard.Name text={card.ownerName || "NAME"} />
					<EmptyCard.ExpirationDate month={month || "MM"} year={year || "YY"} />
				</EmptyCard>
			)}
			{!!card.companyName.length && (
				<Card
					size='small'
					onClick={open}
					color={getColorWithCompanyName(card.companyName)}
				>
					<Card.Top>
						<Card.CardCompany text={`${card.companyName}카드`} />
					</Card.Top>
					<Card.Middle>
						<Card.Chip />
					</Card.Middle>
					<Card.Bottom>
						<Card.CardNumber
							text={maskStringAfterIndex(
								convertObjectValuesToString(card.cardNumber),
								2
							)}
						/>
						<Card.BottomInfo>
							<Card.Name text={card.ownerName || "NAME"} />
							<Card.ExpirationDate month={month || "MM"} year={year || "YY"} />
						</Card.BottomInfo>
					</Card.Bottom>
				</Card>
			)}
			{/** 카드 번호 */}
			<FlexibleInput>
				<FlexibleInput.Title>카드 번호</FlexibleInput.Title>
				<FlexibleInput.InputBox>
					<FlexibleInput.Input
						name='cardNumber.first'
						value={card.cardNumber.first}
						onChange={(e) => {
							send({
								type: "CHANGE_CARD_NUMBER",
								name: "first",
								value: e.target.value
							});
						}}
						maxLength={CARD_NUMBER_LENGTH}
					/>
					{card.cardNumber.first.length === CARD_NUMBER_LENGTH && (
						<FlexibleInput.Separator>-</FlexibleInput.Separator>
					)}
					<FlexibleInput.Input
						type='text'
						name='cardNumber.second'
						value={card.cardNumber.second}
						onChange={(e) => {
							send({
								type: "CHANGE_CARD_NUMBER",
								name: "second",
								value: e.target.value
							});
						}}
						maxLength={CARD_NUMBER_LENGTH}
					/>
					{card.cardNumber.second.length === CARD_NUMBER_LENGTH && (
						<FlexibleInput.Separator>-</FlexibleInput.Separator>
					)}
					<FlexibleInput.Input
						type='password'
						name='cardNumber.third'
						value={card.cardNumber.third}
						onChange={(e) => {
							send({
								type: "CHANGE_CARD_NUMBER",
								name: "third",
								value: e.target.value
							});
						}}
						maxLength={CARD_NUMBER_LENGTH}
					/>
					{card.cardNumber.third.length === CARD_NUMBER_LENGTH && (
						<FlexibleInput.Separator>-</FlexibleInput.Separator>
					)}
					<FlexibleInput.Input
						type='password'
						name='cardNumber.fourth'
						value={card.cardNumber.fourth}
						onChange={(e) => {
							send({
								type: "CHANGE_CARD_NUMBER",
								name: "fourth",
								value: e.target.value
							});
						}}
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
						onChange={(e) => {
							send({
								type: "CHANGE_OWNER_NAME",
								value: e.target.value
							});
						}}
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
						onChange={(e) => {
							send({
								type: "CHANGE_PASSWORD",
								name: "first",
								value: e.target.value
							});
						}}
						width={15}
						maxLength={CARD_PASSWORD_LENGTH}
					/>
					<FlexibleInput.Input
						type='password'
						name='password.second'
						value={card.password.second}
						onChange={(e) => {
							send({
								type: "CHANGE_PASSWORD",
								name: "second",
								value: e.target.value
							});
						}}
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
			<BottomSheet>
				<CardCompanyList
					onClick={(cardCompany) => {
						send({
							type: "CHANGE_CARD_COMPANY_NAME",
							value: cardCompany.companyName
						});
						close();
					}}
				/>
			</BottomSheet>
			{!!isAllInputFilled && (
				<BottomFixedButton width={20} onClick={onClickNext}>
					<Text.Span color='cyan500' fontSize={14}>
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
