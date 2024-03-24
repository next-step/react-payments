import CardBox from '../CardBox'
import Container from '../container'
import Input from '../input/input'

type AddCardProps = {
	onNext?: (data: any) => void
}

function AddCard(props: AddCardProps) {
	return (
		<>
			<CardBox />

			{/* 제어패턴 ** 각각 입력한거 모아서 다 데이터(registerData)에 저장해둬야함. */}

			<Container title="카드 번호">
				<Input type="text" />
				{/* <Input type="text" />
        <Input type="password" />
        <Input type="password" /> */}
			</Container>

			<Container title="만료일">
				<Input type="text" placeholder="MM" />
				<Input type="text" placeholder="YY" />
			</Container>

			<Container title="카드 소유자 이름(선택)">
				<Input type="text" />
			</Container>

			<Container title="보안코드(CVC/CVV)">
				<Input type="password" />
			</Container>

			<Container title="카드 비밀번호">
				<Input type="password" />
				<Input type="password" />
				<Input type="password" />
				<Input type="password" />
			</Container>

			<div className="button-box">
				<button type="button" className="button-text" onClick={props.onNext}>
					다음
				</button>
			</div>
		</>
	)
}

export default AddCard
