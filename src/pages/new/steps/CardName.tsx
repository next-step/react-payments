import { useState } from 'react';
import { Button, Form, Card } from '@/components';
import { FormMachineContext } from '@/pages/new';
import type { FormItems, FormItemKeys, FormItemValues } from '@/types/form';

interface CardNameProps {
  next: (data: Map<Partial<FormItemKeys>, FormItemValues<FormItems>>) => void;
}

const CardName = ({ next }: CardNameProps) => {
  const totalFormData = FormMachineContext.useSelector(
    (state) => state.context.totalFormData
  );

  const [cardName, setCardName] = useState('');
  return (
    <main>
      <h1>카드 등록이 완료되었습니다.</h1>
      <Card
        size='large'
        cardNumber={[
          totalFormData.get('cardNumber1') || '',
          totalFormData.get('cardNumber2') || '',
          totalFormData.get('cardNumber3') || '',
          totalFormData.get('cardNumber4') || '',
        ]}
        expirationDate={{
          month: totalFormData.get('expireDateMonth') || '',
          year: totalFormData.get('expireDateYear') || '',
        }}
        owner={totalFormData.get('cardOwner') || ''}
      />

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const myMap = new Map([
            ['cardName', cardName || '카드브랜드'],
          ]) as Map<Partial<FormItemKeys>, FormItemValues<FormItems>>;
          next(myMap);
        }}
      >
        <Form.Item>
          <input
            placeholder='카드 이름'
            value={cardName}
            maxLength={10}
            onChange={(e) => setCardName(e.target.value)}
          />
          <Button htmlType='submit'>확인</Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default CardName;
