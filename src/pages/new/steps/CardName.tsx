import { useState, useMemo } from 'react';
import { Button, Form, Card, Input, Footer } from '@/components';
import { FormMachineContext } from '@/pages/new';
import * as styles from './cardName.css';
import type { FormItems, FormItemKeys, FormItemValues } from '@/types/form';

interface CardNameProps {
  next: (data: Map<Partial<FormItemKeys>, FormItemValues<FormItems>>) => void;
}

const CardName = ({ next }: CardNameProps) => {
  const [cardName, setCardName] = useState('');
  const totalFormData = FormMachineContext.useSelector(
    (state) => state.context.totalFormData
  );

  const cardBrand = useMemo(() => {
    const cardNumer1 = totalFormData.get('cardNumber1');
    if (!cardNumer1) {
      return 'UNKNOWN';
    }
    const firstNumber = cardNumer1[0];
    if (firstNumber === '9' || firstNumber === '0') {
      return 'UNKNOWN';
    }
    return `BRAND${cardNumer1[0]}`;
  }, [totalFormData]);

  return (
    <main>
      <p>카드 등록이 완료되었습니다.</p>
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
          const myMap = new Map([['cardName', cardName || cardBrand]]) as Map<
            Partial<FormItemKeys>,
            FormItemValues<FormItems>
          >;
          next(myMap);
        }}
      >
        <Form.Item>
          <Input
            block
            type='underline'
            placeholder='카드 별칭 (선택)'
            value={cardName}
            maxLength={10}
            onChange={(e) => setCardName(e.target.value)}
          />
        </Form.Item>
        <Footer className={styles.textEnd}>
          <Button htmlType='submit' type='text'>
            확인
          </Button>
        </Footer>
      </Form>
    </main>
  );
};

export default CardName;
