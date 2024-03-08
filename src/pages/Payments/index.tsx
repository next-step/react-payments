import { useRef, useState } from 'react';
import AddCardCompleted from './AddCardCompleted';
import AddCard from './AddCard';
import CardList from '../CardList';
import { Form } from '@/context/Form';
import { cardValidate } from '@/utils/cardValidations';
import { initialFormData } from '@/constants/form';
import { FormType } from '@/type/formType';

export default function Payments() {
  const [step, setStep] = useState('카드_입력');

  const cardValue = useRef({ card: initialFormData });

  const handleSubmit = (values: FormType) => {
    cardValue.current.card = values;

    onNext();
  };

  // 다음 단계 로직을 구현하거나 상태를 변경하는 코드 작성
  const onNext = () => {
    if (step === '카드_입력') {
      setStep('카드_입력_완료');
    } else if (step === '카드_입력_완료') {
      setStep('카드_목록');
    }
  };

  return (
    <>
      <Form
        initialValue={initialFormData}
        validate={cardValidate}
        onSubmit={handleSubmit}
      >
        {step === '카드_입력' && (
          <AddCard onPrevious={() => setStep('카드_목록')} />
        )}
        {step === '카드_입력_완료' && (
          <AddCardCompleted onNext={() => setStep('카드_목록')} />
        )}
        {step === '카드_목록' && (
          <CardList onFirstStep={() => setStep('카드_입력')} />
        )}
      </Form>
    </>
  );
}
