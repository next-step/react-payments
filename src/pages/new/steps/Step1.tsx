import { useEffect, useState, useRef, Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Header } from '@/components';
import { Card } from '@/pages/_components';
import FormContext from '@/pages/new/context';
import * as styles from './step1.css';
import Arrow from '@/assets/arrow.svg?react';
import type { FormEvent } from 'react';

interface Step1Props {
  next: () => void;
}
const Step1 = ({ next }: Step1Props) => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formItems, setFormItems] = useState<HTMLFormControlsCollection>();
  const [formData, setFormData] = useState(new Map());
  const { totalFormData, setTotalFormData } = useContext(FormContext);

  useEffect(() => {
    if (!formRef.current) return;
    const formItems = formRef.current.elements;
    setFormItems(formItems);
  }, []);

  return (
    <>
      <Header
        left={
          <Button
            onClick={() => navigate('/')}
            aria-label='뒤로가기'
            type='text'
          >
            <Arrow />
          </Button>
        }
      >
        <h1 className={styles.header}>카드 추가</h1>
      </Header>
      <main
        style={{
          width: '100%',
        }}
      >
        <Card
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
            // if (target.value === '') {
            //   const PrevFormItem = formItems?.item(currentIndex - 1);
            //   if (PrevFormItem instanceof HTMLInputElement) {
            //     PrevFormItem.focus();
            //   }
            // }

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
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const totalNewData = new Map([...totalFormData, ...formData]);
            setTotalFormData(totalNewData);
            next();
          }}
        >
          <Form.Item vertical label={'카드번호'}>
            <div className={styles.cardNumberInputBox}>
              {[1, 2, 3, 4].map((i) => (
                <Fragment key={i}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Input
                      required
                      name={`cardNumber${i}`}
                      type={i > 2 ? 'password' : 'text'}
                      inputMode='numeric'
                      minLength={4}
                      maxLength={4}
                      style={{ textAlign: 'center' }}
                      data-rule={'^[0-9]{4}$'}
                      data-message={'숫자 4자리를 입력해주세요'}
                    />
                    {i !== 4 && (
                      <span
                        style={{
                          opacity:
                            formData.get(`cardNumber${i}`)?.length === 4
                              ? 1
                              : 0,
                          color: '#04C09E',
                        }}
                      >
                        -
                      </span>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          </Form.Item>
          <Form.Item vertical label={'만료일'}>
            <div className={styles.expireDateInputBox}>
              <Input
                required
                type='number'
                inputMode='numeric'
                placeholder='MM'
                name='expireDateMonth'
                maxLength={2}
                data-rule={'^(0[1-9]|1[0-2])$'}
                data-message={'01~12월 사이의 숫자만 입력해주세요'}
                style={{ textAlign: 'right' }}
              />
              <span
                style={{
                  opacity:
                    formData.get('expireDateMonth')?.length === 2 ? 1 : 0,
                  transform: 'translateX(-6px)',
                  color: '#04C09E',
                }}
              >
                /
              </span>
              <Input
                required
                type='number'
                inputMode='numeric'
                placeholder='YY'
                name='expireDateYear'
                minLength={2}
                maxLength={2}
              />
            </div>
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Input
                required
                name='cvc'
                type='password'
                inputMode='numeric'
                maxLength={3}
                style={{
                  width: '60px',
                  textAlign: 'center',
                  letterSpacing: '8px',
                }}
                data-rule={'^[0-9]{3}$'}
                data-message={'숫자 3자리를 입력해주세요'}
              />
              <div style={{ flexGrow: 1 }}>툴팁</div>
            </div>
          </Form.Item>
          <Form.Item vertical label={'카드 비밀번호'}>
            <div className={styles.passwordInputBox}>
              {[1, 2].map((i) => (
                <div key={i} className={styles.passwordPinBox}>
                  <Input
                    required
                    name={`password${i}`}
                    type='password'
                    inputMode='numeric'
                    maxLength={1}
                    style={{
                      textAlign: 'center',
                    }}
                    data-rule={'^[0-9]$'}
                    data-message={'숫자만 입력해주세요'}
                  />
                </div>
              ))}
              <div className={styles.passwordPinBox}>•</div>
              <div className={styles.passwordPinBox}>•</div>
            </div>
          </Form.Item>
          <div style={{ textAlign: 'end' }}>
            <Button htmlType='submit' type='text' style={{ color: '#04C09E' }}>
              다음
            </Button>
          </div>
        </Form>
      </main>
    </>
  );
};

export default Step1;
