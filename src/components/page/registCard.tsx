import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import question from '../../assets/question.svg'
import Container from '../container'
import Input from '../input/input'
import BasicLayout from '../layout/basicLayout'
import './registCard.css'
import CardBox from '../CardBox'
import useInput from '../../hooks/useInput'

export type RegisterDataType = {
	cardNumber: string
	expirationDate: string
	ownerName: string
	securityCode?: string
	secretCode?: string
}

type RegistCardProps = {
	setRegisterData: (value: RegisterDataType) => void
	onPrev?: () => void
	onNext?: () => void
}

const CARD_NUMBER_LENGTH = 4

/**
 * [리팩토링 요소]
 * 1) 마스킹 넘버 리턴하는것, validation은 받아서 처리하면됨,
 */
const RegistCard = (props: RegistCardProps) => {
	const { setRegisterData, onPrev, onNext } = props

	// 카드번호 - 1번째
	const { value: firstCardNumber, handleChange: handleChangeCardNumberFirstFunc } = useInput('')

	// 카드번호 - 2번째
	const { value: secondCardNumber, handleChange: handleChangeCardNumberSecondFunc } = useInput('')

	// 카드번호 - 3번째
	const [thirdCardMaskedNumber, setThirdCardMaskedNumber] = useState<string>('')
	const [thirdCardNumber, setThirdCardNumber] = useState<string>('')

	// 카드번호 - 4번째
	const [fourthCardMaskedNumber, setFourthCardMaskedNumber] = useState<string>('')
	const [fourthCardNumber, setFourthCardNumber] = useState<string>('')

	// 카드 소유자 이름
	const { value: ownerNameValue, handleChange: handleOwnerNameFunc } = useInput('')

	// 만료 날짜
	const [expirationDate, setExpirationDate] = useState<string>('')

	// 보안 코드
	const [securityCode, setSecurityCode] = useState<string>('')
	const [securityMaskedCode, setSecurityMaskedCode] = useState<string>('')

	// 비밀 번호
	const [firstSecretCode, setFirstSecretCode] = useState<string>()
	const [firstSecretMaskedCode, setFirstSecretMaskedCode] = useState<string>()

	const [secondSecretCode, setSecondSecretCode] = useState<string>()
	const [secondSecretMaskedCode, setSecondSecretMaskedCode] = useState<string>()

	// 조건에 부합하면 - true리턴 / 조건에 부합하지 않으면 false 리턴
	const validateNumberWithMaxLength = (value: string, maxLength?: number): boolean => {
		const MAX_LENGTH = maxLength || 4
		const isValidLength = value.length <= MAX_LENGTH
		const isNumber = !Number.isNaN(Number(value))

		const isValid = [isValidLength, isNumber].every(Boolean)

		return isValid
	}

	const isMonth = (input: string) => {
		return new RegExp(/^(0?[1-9]|1[0-2])$/).test(input)
	}

	const onClickButtonNextHandler = () => {
		onNext && onNext()
		setRegisterData({
			cardNumber: `${firstCardNumber}${secondCardNumber}${thirdCardMaskedNumber}${fourthCardMaskedNumber}`,
			expirationDate: expirationDate,
			ownerName: ownerNameValue,
			securityCode: securityCode,
			secretCode: `${firstSecretCode}${secondSecretCode}`,
		})
	}

	return (
		<>
			<BasicLayout>
				<BasicLayout.Header>
					<button onClick={onPrev} style={{ display: 'flex' }}>
						<img src={arrow} />
						<h2 className="page-title" style={{ marginLeft: '15px' }}>
							카드 추가
						</h2>
					</button>
				</BasicLayout.Header>
				<BasicLayout.Main>
					<CardBox
						cardNumber={`${firstCardNumber}${secondCardNumber}${thirdCardMaskedNumber}${fourthCardMaskedNumber}`}
						expirationDate={expirationDate}
						ownerName={ownerNameValue}
					/>
					<Container title="카드 번호">
						<div className="container-flex">
							<Input
								type="text"
								value={firstCardNumber}
								onChange={(event) => {
									if (!validateNumberWithMaxLength(event.target.value, 4)) {
										return
									}

									handleChangeCardNumberFirstFunc(event)
								}}
							/>
							{firstCardNumber.length === CARD_NUMBER_LENGTH && <div>-</div>}
							<Input
								type="text"
								value={secondCardNumber}
								onChange={(event) => {
									if (!validateNumberWithMaxLength(event.target.value, 4)) {
										return
									}

									handleChangeCardNumberSecondFunc(event)
								}}
							/>
							{secondCardNumber.length === CARD_NUMBER_LENGTH && <div>-</div>}
							{/* 카드번호 3번째 자리 */}
							<Input
								type="text"
								value={thirdCardMaskedNumber}
								onChange={(event) => {
									const newThirdCardNumber =
										thirdCardNumber + event.target.value.replace(/\*/g, '')

									if (!validateNumberWithMaxLength(newThirdCardNumber, 4)) {
										return
									}

									setThirdCardNumber(newThirdCardNumber)

									setThirdCardMaskedNumber(
										Array.from(event.target.value)
											.map(() => '*')
											.join(''),
									)
								}}
							/>
							{thirdCardMaskedNumber.length === CARD_NUMBER_LENGTH && <div>-</div>}

							<Input
								type="text"
								value={fourthCardMaskedNumber}
								onChange={(event) => {
									const newFourthCardNumber =
										fourthCardNumber + event.target.value.replace(/\*/g, '')

									if (!validateNumberWithMaxLength(newFourthCardNumber, 4)) {
										return
									}

									setFourthCardNumber(newFourthCardNumber)

									setFourthCardMaskedNumber(
										Array.from(event.target.value)
											.map(() => '*')
											.join(''),
									)
								}}
							/>
						</div>
					</Container>
					<Container title="만료일">
						<div className="auto-sizing-width-item-35">
							<Input
								type="text"
								placeholder="MM/YY"
								value={expirationDate}
								onKeyDown={(event) => {
									if (
										event.key === 'Backspace' &&
										expirationDate.includes('/') &&
										expirationDate.length === 3
									) {
										event.preventDefault()
										setExpirationDate(
											expirationDate.slice(0, expirationDate.length - 1),
										)
									}
								}}
								onChange={(event) => {
									const { value } = event.target

									if (value.length > 5) {
										return
									}
									// 3번째 자리에 /를 삽입
									if (value.length === 2) {
										if (!isMonth(value)) {
											alert(
												'월은 1이상 12이하 숫자여야 합니다. ex) 3월이라면 03으로 기입해주세요',
											)
											return
										}

										setExpirationDate(value + '/')
										return
									}

									setExpirationDate(value)
								}}
							/>
						</div>
					</Container>
					<Container
						title="카드 소유자 이름(선택)"
						titleRight={<span>{ownerNameValue.length}</span>}
					>
						<Input
							placeholder="카드에 표시된 이름과 동일하게 입력하세요."
							value={ownerNameValue}
							onChange={handleOwnerNameFunc}
						/>
					</Container>
					<Container title="보안코드(CVC/CVV)">
						<div className="auto-sizing-width-container">
							<Input
								value={securityMaskedCode}
								onChange={(event) => {
									const newSecurityCode =
										securityCode + event.target.value.replace(/\*/g, '')

									const isValidNumber = (input: string) => {
										console.log('input', input, !Number.isNaN(Number(input)))
										return !Number.isNaN(Number(input))
									}
									if (!isValidNumber(newSecurityCode)) {
										alert('숫자를 입력해주세요!')
										return
									}
									setSecurityCode(newSecurityCode)

									setSecurityMaskedCode(
										Array.from(event.target.value)
											.map(() => '*')
											.join(''),
									)
								}}
							/>
							<button>
								<img src={question} />
							</button>
						</div>
					</Container>
					<Container title="카드비밀번호">
						<div className="auto-sizing-width-container">
							<span className="auto-sizing-width-item">
								<Input
									value={firstSecretMaskedCode}
									onChange={(event) => {
										const newFirstSecretCode =
											firstSecretCode + event.target.value.replace(/\*/g, '')

										if (!validateNumberWithMaxLength(event.target.value, 1)) {
											return
										}
										setFirstSecretCode(newFirstSecretCode)

										setFirstSecretMaskedCode(
											Array.from(event.target.value)
												.map(() => '*')
												.join(''),
										)
									}}
								/>
							</span>
							<span className="auto-sizing-width-item">
								<Input
									value={secondSecretMaskedCode}
									onChange={(event) => {
										const newSecondSecretCode =
											secondSecretCode + event.target.value.replace(/\*/g, '')

										if (!validateNumberWithMaxLength(event.target.value, 1)) {
											return
										}

										setSecondSecretCode(newSecondSecretCode)

										setSecondSecretMaskedCode(
											Array.from(event.target.value)
												.map(() => '*')
												.join(''),
										)
									}}
								/>
							</span>
							<span className="auto-sizing-width-item dot-align">
								<div className="dot-hightlight" />
							</span>
							<span className="auto-sizing-width-item dot-align">
								<div className="dot-hightlight" />
							</span>
						</div>
					</Container>
				</BasicLayout.Main>
				<BasicLayout.Footer className="button-box">
					{/* @TODO: button - isActive 상태 넣기 */}
					<button
						type="button"
						className="button-text"
						onClick={onClickButtonNextHandler}
					>
						다음
					</button>
				</BasicLayout.Footer>
			</BasicLayout>
		</>
	)
}

export default RegistCard
