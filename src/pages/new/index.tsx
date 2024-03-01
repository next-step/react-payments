import { useEffect, useState, useRef, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Form, Input } from '@/components';
import { Card } from '@/pages/_components';
import type { CardBrand } from '@/types/card';

const New = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formItems, setFormItems] = useState<HTMLFormControlsCollection>();
  const [formData, setFormData] = useState(new Map());
  const [cardBrand, setCardBrand] = useState<CardBrand | 'UNKNOWN'>('UNKNOWN');
  const firstCardNumber = formData.get('cardNumber1');

  useEffect(() => {
    if (!formRef.current) return;
    const formItems = formRef.current.elements;
    setFormItems(formItems);
  }, [formRef.current]);

  useEffect(() => {
    if (!firstCardNumber) return;
    const firstNum = firstCardNumber[0];
    if (firstNum === '9') {
      setCardBrand('UNKNOWN');
      return;
    }
    const brand = `BRAND${firstNum}` as CardBrand;
    setCardBrand(brand);
  }, [firstCardNumber]);

  return (
    <>
      <Header left={<button onClick={() => navigate('/')}>뒤로가기</button>}>
        <h1>카드 추가</h1>
      </Header>
      <Card
        brand={cardBrand}
        cardNumber={[
          formData.get('cardNumber1') || '',
          formData.get('cardNumber2') || '',
          formData.get('cardNumber3') || '',
          formData.get('cardNumber4') || '',
        ]}
        expirationDate={{
          month: formData.get('expireDateMonth'),
          year: formData.get('expireDateYear'),
        }}
        owner={formData.get('cardOwner')}
      />
      <main>
        <Form
          ref={formRef}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const currentIndex = Array.from(formItems!).findIndex(
              (item) => item === target
            );

            // setCustomeValidity
            if (target.dataset.rule) {
              const rule = new RegExp(target.dataset.rule);
              if (!rule.test(target.value)) {
                target.setCustomValidity(
                  target.dataset.message || '올바른 형식이 아닙니다.'
                );
              } else {
                target.setCustomValidity('');
              }
            }

            // 지울 때 이전 input으로 focus
            if (target.value === '') {
              const PrevFormItem = formItems?.item(currentIndex - 1);
              if (PrevFormItem instanceof HTMLInputElement) {
                PrevFormItem.focus();
              }
            }

            // maxLength 다 됐으면 다음 input으로 focus
            if (target.maxLength === target.value.length) {
              const NextFormItem = formItems?.item(currentIndex + 1);
              if (NextFormItem instanceof HTMLInputElement) {
                NextFormItem.focus();
              }
            }

            setFormData((prev) => {
              const next = new Map(prev);
              next.set(target.name, target.value);
              return next;
            });
          }}
        >
          <Form.Item vertical label={'카드번호'}>
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4].map((i) => (
                <Fragment key={i}>
                  <Input
                    required
                    name={`cardNumber${i}`}
                    type='text'
                    inputMode='numeric'
                    minLength={4}
                    maxLength={4}
                  />
                  {i !== 4 && formData.get(`cardNumber${i}`)?.length === 4 && (
                    <span>-</span>
                  )}
                </Fragment>
              ))}
            </div>
          </Form.Item>
          <Form.Item vertical label={'만료일'}>
            <Input
              required
              type='number'
              inputMode='numeric'
              placeholder='MM'
              name='expireDateMonth'
              maxLength={2}
              data-rule={'^(0[1-9]|1[0-2])$'}
              data-message={'01~12월 사이의 숫자만 입력해주세요'}
            />
            {formData.get('expireDateMonth')?.length === 2 && <span>/</span>}
            <Input
              required
              type='number'
              inputMode='numeric'
              placeholder='YY'
              name='expireDateYear'
              minLength={2}
              maxLength={2}
            />
          </Form.Item>
          <Form.Item
            vertical
            label={
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>카드 소유자 이름(선택)</span>
                <span>{formData.get('cardOwner')?.length || 0}/30</span>
              </div>
            }
          >
            <Input
              name='cardOwner'
              type='text'
              placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
              maxLength={30}
            />
          </Form.Item>
          <Form.Item vertical label={'보안코드(CVC/CVV)'}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input name='cvc' type='text' inputMode='numeric' maxLength={3} />
              <div>툴팁</div>
            </div>
          </Form.Item>
          <Form.Item vertical label={'카드 비밀번호'}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
              }}
            >
              <Input
                name='password1'
                type='password'
                inputMode='numeric'
                maxLength={1}
              />
              <Input
                name='password2'
                type='password'
                inputMode='numeric'
                maxLength={1}
              />
              <div>•</div>
              <div>•</div>
            </div>
          </Form.Item>
          <button type='submit'>다음</button>
        </Form>
      </main>
    </>
  );
};

export default New;
