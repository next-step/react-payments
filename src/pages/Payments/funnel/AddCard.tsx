import { usePaymentsFunnel } from '../payments.context';
import { STEP } from '../payments.constant';
import { PaymentsStepKey } from '../payments.type';
import { Input } from '@/components/input/Input';
import { INPUT } from '@/components/input/input.constant';

export const AddCard = () => {
  const { setStep } = usePaymentsFunnel();

  return (
    <div>
      <h2 className='page-title'>{`< 카드 추가`}</h2>
      <div className='card-box'>
        <div className='empty-card'>
          <div className='card-top'></div>
          <div className='card-middle'>
            <div className='small-card__chip'></div>
          </div>
          <div className='card-bottom'>
            <div className='card-bottom__info'>
              <span className='card-text'>NAME</span>
              <span className='card-text'>MM / YY</span>
            </div>
          </div>
        </div>
      </div>

      <Input.Container>
        <Input.Title>카드 번호</Input.Title>
        <Input.Box separator={INPUT.SEPARATOR.SLASH}>
          <Input type={INPUT.FACTORY.TEXT.TYPE} />
          <Input type={INPUT.FACTORY.TEXT.TYPE} />
          <Input type={INPUT.FACTORY.PASSWORD.TYPE} />
          <Input type={INPUT.FACTORY.PASSWORD.TYPE} />
        </Input.Box>
      </Input.Container>

      <Input.Container>
        <Input.Title>만료일</Input.Title>
        <Input.Box separator={INPUT.SEPARATOR.SLASH} className='w-50'>
          <Input type={INPUT.FACTORY.TEXT.TYPE} placeholder='MM' />
          <Input type={INPUT.FACTORY.TEXT.TYPE} placeholder='YY' />
        </Input.Box>
      </Input.Container>

      <Input.Container>
        <Input.Title>카드 소유자 이름(선택)</Input.Title>
        <Input.Box>
          <Input
            type={INPUT.FACTORY.TEXT.TYPE}
            placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          />
        </Input.Box>
      </Input.Container>

      <Input.Container>
        <Input.Title>보안코드(CVC/CVV)</Input.Title>
        <Input type={INPUT.FACTORY.PASSWORD.TYPE} className='w-25' />
      </Input.Container>

      <Input.Container>
        <Input.Title>카드 비밀번호</Input.Title>
        <Input type={INPUT.FACTORY.PASSWORD.TYPE} className='w-15' />
        <Input type={INPUT.FACTORY.PASSWORD.TYPE} className='w-15' />
        <Input type={INPUT.FACTORY.PASSWORD.TYPE} className='w-15' />
        <Input type={INPUT.FACTORY.PASSWORD.TYPE} className='w-15' />
      </Input.Container>

      <div className='button-box'>
        <span className='button-text'>다음</span>
      </div>

      {/* Buttons */}
      {Object.keys(STEP).map((key) => {
        return (
          <button
            key={key}
            onClick={() => setStep(STEP[key as PaymentsStepKey])}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
