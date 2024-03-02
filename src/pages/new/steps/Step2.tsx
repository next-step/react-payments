import { useContext, useState } from 'react';
import FormContext from '@/pages/new/context';
import { Button, Form } from '@/components';
import { Card } from '@/pages/_components';

interface Step2Props {
  next: () => void;
}
const Step2 = ({ next }: Step2Props) => {
  const { totalFormData, setTotalFormData } = useContext(FormContext);
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
          month: totalFormData.get('expireDateMonth'),
          year: totalFormData.get('expireDateYear'),
        }}
        owner={totalFormData.get('cardOwner')}
      />

      <Form
        onSubmit={() => {
          if (cardName) {
            setTotalFormData((prev) => {
              prev.set('cardName', cardName);
              return prev;
            });
          }
          next();
        }}
      >
        <input
          placeholder='카드 이름'
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Button htmlType='submit'>확인</Button>
      </Form>
    </main>
  );
};

export default Step2;
