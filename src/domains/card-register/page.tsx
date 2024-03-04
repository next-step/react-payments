import { useFunnel } from '@/hooks/use-funnel'
import { CardInputFormFunnel } from '@/domains/card-register/funnels/card-input-form-funnel'
import { CardRegisterCompleteFunnel } from '@/domains/card-register/funnels/card-register-complete-funnel'

// TODO
// [ ] 상태 연결, 다음 활성화 로직 구성 (다음 퍼널에서도 사용되어야 하므로 context로 폼 입력 상태를 정의해야 할듯)
// [ ] 상단에 카드 컴포넌트 표시, 상태랑 연결
// [ ] Funnel 연결 + 카드 등록 완료로 이동

const 카드_입력_폼 = 'card-input-form'
const 카드_등록_완료 = 'card-register-complete'

export const CardRegisterPage = () => {
  const [Funnel, step, setStep] = useFunnel(카드_입력_폼)

  return (
    <Funnel.Root step={step}>
      <Funnel.Step name={카드_입력_폼}>
        <CardInputFormFunnel onSubmit={() => setStep(카드_등록_완료)} />
      </Funnel.Step>
      <Funnel.Step name={카드_등록_완료}>
        <CardRegisterCompleteFunnel />
      </Funnel.Step>
    </Funnel.Root>
  )
}
