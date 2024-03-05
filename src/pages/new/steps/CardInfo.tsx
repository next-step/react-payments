import { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Header, Card } from '@/components';
import FormContext from '@/pages/new/context';
import * as styles from './cardInfo.css';
import Arrow from '@/assets/arrow.svg?react';
import type { FormEvent } from 'react';

interface CardInfoProps {
  next: () => void;
}
const CardInfo = ({ next }: CardInfoProps) => {
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

  const handleCustomValidity = (target: HTMLInputElement) => {
    if (!target.dataset.rule) {
      return;
    }
    const rule = new RegExp(target.dataset.rule);
    if (!rule.test(target.value)) {
      target.setCustomValidity(
        target.dataset.message || '올바른 형식이 아닙니다.'
      );
    } else {
      target.setCustomValidity('');
    }
  };

  const handleChangeForm = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    const currentIndex = Array.from(formItems!).findIndex(
      (item) => item === target
    );
    const isInputEnd = target.maxLength === target.value.length;

    handleCustomValidity(target);

    if (isInputEnd) {
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
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalNewData = new Map([...totalFormData, ...formData]);
    setTotalFormData(totalNewData);
    next();
  };
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
      <main className={styles.wFull}>
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
          onChange={handleChangeForm}
          onSubmit={handleSubmitForm}
        >
          <Form.Item vertical label={'카드번호'} inputId={'cardNumber1'}>
            <div className={styles.cardNumberInputContainer}>
              {[1, 2, 3, 4].map((i) => {
                const showDelimiter = `${formData.get(
                  `cardNumber${i}`?.length === 4
                )}` as 'true' | 'false';
                return (
                  <div key={i} className={styles.cardNumberInputBox}>
                    <Input
                      required
                      id={`cardNumber${i}`}
                      name={`cardNumber${i}`}
                      className={styles.textCenter}
                      type={i > 2 ? 'password' : 'text'}
                      inputMode='numeric'
                      minLength={4}
                      maxLength={4}
                      data-rule={'^[0-9]{4}$'}
                      data-message={'숫자 4자리를 입력해주세요'}
                    />
                    {i !== 4 && (
                      <span className={styles.delimiter[showDelimiter]}>-</span>
                    )}
                  </div>
                );
              })}
            </div>
          </Form.Item>
          <Form.Item vertical label={'만료일'} inputId={'expireDateMonth'}>
            <div className={styles.expireDateInputContainer}>
              <Input
                required
                id='expireDateMonth'
                name='expireDateMonth'
                className={styles.textCenter}
                type='number'
                inputMode='numeric'
                placeholder='MM'
                maxLength={2}
                data-rule={'^(0[1-9]|1[0-2])$'}
                data-message={'01~12월 사이의 숫자만 입력해주세요'}
              />
              <span
                className={
                  styles.delimiter[
                    `${formData.get('expireDateMonth')?.length === 2}`
                  ]
                }
                style={{
                  transform: 'translateX(-6px)',
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
            inputId='cardOwner'
          >
            <Input
              id='cardOwner'
              name='cardOwner'
              type='text'
              placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
              maxLength={30}
            />
          </Form.Item>
          <Form.Item vertical label={'보안코드(CVC/CVV)'} inputId={'cvc'}>
            <div className={styles.cvcInputBox}>
              <Input
                required
                id='cvc'
                name='cvc'
                className={styles.cvcInputElem}
                type='password'
                inputMode='numeric'
                maxLength={3}
                data-rule={'^[0-9]{3}$'}
                data-message={'숫자 3자리를 입력해주세요'}
              />
              <div className={styles.toolTipBox}>툴팁</div>
            </div>
          </Form.Item>
          <Form.Item vertical label={'카드 비밀번호'} inputId={'password1'}>
            <div className={styles.passwordInputContainer}>
              {[1, 2].map((i) => (
                <div key={i} className={styles.passwordPinBox}>
                  <Input
                    required
                    id={`password${i}`}
                    name={`password${i}`}
                    className={styles.textCenter}
                    type='password'
                    inputMode='numeric'
                    maxLength={1}
                    data-rule={'^[0-9]$'}
                    data-message={'숫자만 입력해주세요'}
                  />
                </div>
              ))}
              <div className={styles.passwordPinBox}>•</div>
              <div className={styles.passwordPinBox}>•</div>
            </div>
          </Form.Item>
          <div className={styles.textEnd}>
            <Button
              htmlType='submit'
              type='text'
              className={styles.textPrimary}
            >
              다음
            </Button>
          </div>
        </Form>
      </main>
    </>
  );
};

export default CardInfo;
