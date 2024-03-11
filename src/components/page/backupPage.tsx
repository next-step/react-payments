import { useState } from 'react'
import './App.css'
import useFunnel from '../../hooks/useFunnel'
import Navigation from '../navigation/navigation'
import AddCard from './addCard'
import Modal from '../modal/modal'

export type Step = '카드추가' | '카드사선택' | '입력완료' | '카드추가완료'

function BackUpPage() {
  const [registerData, setRegisterData] = useState({})
  // const [step, setStep] = useState<Step>('카드추가')
  // const { step, setStep, Funnel, Step } = useFunnel<Step>('카드추가')
  const { step, setStep, Funnel, Step } = useFunnel('카드추가')

  // const [stepNum, setStepNum] = useState<number>(0)

  // const stepName = ['카드추가', '카드사선택', '입력완료', '카드추가완료']

  return (
    <>
      <Navigation currentStageName={step!}></Navigation>
      {/* <Navigation currentStageName={step}></Navigation> */}

      <Funnel>
        <Step name="카드추가">
          <AddCard
            onNext={(data: any) => {
              console.info('daya', data)
              setRegisterData((prev) => ({ ...prev, 카드추가: data })) // 이하 동일
              setStep('카드사선택')
            }}
          />
        </Step>
        <Step name="카드사선택">
          <AddCard />
          {/* modal 상태가 addcard에도 공유되어야함. */}
          <Modal onNext={() => setStep('입력완료')} />
        </Step>
        <Step name="입력완료">
          <AddCard />
          <Modal onNext={() => setStep('카드추가완료')} />
        </Step>
      </Funnel>

      {/* 비제어패턴 ** 데이터(registerData) 다 입력후 확인 누르면 저장해야함, 이 떄 유효성 검사도 진행(필수 input들이 다 들어왔는지) */}

      {/* {step === '카드추가' && (
      <카드추가
        onNext={(data: any) => {
          setRegisterData((prev) => ({ ...prev, 가입방식: data }))
          setStep('카드사선택')
        }}
      />
    )} */}
    </>
  )
}

export default BackUpPage
