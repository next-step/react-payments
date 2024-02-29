import { useState } from 'react'
import './App.css'
import '../styles/index.css'
import Navigation from './components/navigation/navigation'
import Input from './components/input/input'
import Container from './components/container'

/**
 * step 관리
 * 1) 카드 추가
 * 2) 카드사 선택
 * 3) 입력 완료
 * 4) 카드 추가 완료
 * 5) 카드 목록
 * @returns
 */
function App() {
  const [registerData, setRegisterData] = useState({})
  const [step, setStep] = useState<
    '카드추가' | '카드사선택' | '입력완료' | '카드추가완료'
  >('카드추가')

  return (
    <div id="app">
      <Navigation currentStageName={step}></Navigation>
      {/* 제어패턴 ** 각각 입력한거 모아서 다 데이터(registerData)에 저장해둬야함. */}

      <Container title="카드 번호">
        <Input type="text" />
        <Input type="text" />
        <Input type="password" />
        <Input type="password" />
      </Container>

      <Container title="만료일">
        <Input type="text" placeholder='MM'/>
        <Input type="text" placeholder='YY'/>
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
      {/* 비제어패턴 ** 데이터(registerData) 다 입력후 확인 누르면 저장해야함, 이 떄 유효성 검사도 진행(필수 input들이 다 들어왔는지) */}

      {/* {step === '카드추가' && (
        <카드추가
          onNext={(data: any) => {
            setRegisterData((prev) => ({ ...prev, 가입방식: data }))
            setStep('카드사선택')
          }}
        />
      )} */}
    </div>
  )
}

export default App
