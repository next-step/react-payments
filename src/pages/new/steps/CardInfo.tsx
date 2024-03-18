import { useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Header, Card, Footer } from '@/components';
import * as styles from './cardInfo.css';
import Arrow from '@/assets/arrow.svg?react';
import { FormMachineContext } from '@/pages/new';
import type { FormEvent } from 'react';
import type { FormItems, FormItemKeys, FormItemValues } from '@/types/form';
import { useMachine } from '@xstate/react';
import formMachine from '@/machine/cardInfoForm';

interface CardInfoProps {
  next: (data?: Map<Partial<FormItemKeys>, FormItemValues<FormItems>>) => void;
}
const CardInfo = ({ next }: CardInfoProps) => {
  const navigate = useNavigate();
  const [snapshot, send, actorRef] = useMachine(formMachine);
  const formRef = useRef<HTMLFormElement | null>(null);
  const formActorRef = FormMachineContext.useActorRef();
  const cardNumber1Ref = useRef<HTMLInputElement | null>(null);
  const cardNumber2Ref = useRef<HTMLInputElement | null>(null);
  const cardNumber3Ref = useRef<HTMLInputElement | null>(null);
  const cardNumber4Ref = useRef<HTMLInputElement | null>(null);
  const expireDateMonthRef = useRef<HTMLInputElement | null>(null);
  const expireDateYearRef = useRef<HTMLInputElement | null>(null);
  const cardOwnerRef = useRef<HTMLInputElement | null>(null);
  const cvcRef = useRef<HTMLInputElement | null>(null);
  const password1Ref = useRef<HTMLInputElement | null>(null);
  const password2Ref = useRef<HTMLInputElement | null>(null);
  const password3Ref = useRef<HTMLInputElement | null>(null);
  const password4Ref = useRef<HTMLInputElement | null>(null);

  const formItemRefList = useMemo<
    Record<string, React.MutableRefObject<HTMLInputElement | null>>
  >(() => {
    return {
      cardNumber1Ref,
      cardNumber2Ref,
      cardNumber3Ref,
      cardNumber4Ref,
      expireDateMonthRef,
      expireDateYearRef,
      cardOwnerRef,
      cvcRef,
      password1Ref,
      password2Ref,
      password3Ref,
      password4Ref,
    };
  }, [
    cardNumber1Ref,
    cardNumber2Ref,
    cardNumber3Ref,
    cardNumber4Ref,
    expireDateMonthRef,
    expireDateYearRef,
    cardOwnerRef,
    cvcRef,
    password1Ref,
    password2Ref,
    password3Ref,
    password4Ref,
  ]);
  const canSave = snapshot.status === 'done';

  actorRef.subscribe((snapshot) => {
    const Ref = formItemRefList[`${snapshot.value}Ref`];
    if (!Ref) return;
    Ref.current?.focus();
  });
  const {
    context: { data },
  } = snapshot;

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
    handleCustomValidity(target);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formActorRef.send({
      type: 'UPDATE',
      data: new Map(Object.entries(data)) as Map<
        FormItemKeys,
        FormItemValues<FormItems>
      >,
    });
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
            data.cardNumber1 || '',
            data.cardNumber2 || '',
            data.cardNumber3 || '',
            data.cardNumber4 || '',
          ]}
          expirationDate={{
            month: data.expireDateMonth || '',
            year: data.expireDateYear || '',
          }}
          owner={data.cardOwner || ''}
        />
        <Form
          ref={formRef}
          onChange={handleChangeForm}
          onSubmit={handleSubmitForm}
        >
          <Form.Item vertical label={'카드번호'} inputId={'cardNumber1'}>
            <div className={styles.cardNumberInputContainer}>
              {[1, 2, 3, 4].map((i) => {
                const showDelimiter =
                  data[`cardNumber${i}` as FormItemKeys]?.length === 4;
                return (
                  <div key={i} className={styles.cardNumberInputBox}>
                    <Input
                      required
                      ref={formItemRefList[`cardNumber${i}Ref`]}
                      id={`cardNumber${i}`}
                      name={`cardNumber${i}`}
                      className={styles.textCenter}
                      htmpType={i > 2 ? 'password' : 'text'}
                      inputMode='numeric'
                      minLength={4}
                      maxLength={4}
                      data-rule={'^[0-9]{4}$'}
                      data-message={'숫자 4자리를 입력해주세요'}
                      onChange={(e) => {
                        send({
                          type: 'UPDATE',
                          data: {
                            [`cardNumber${i}`]: e.target.value,
                          },
                        });
                      }}
                    />
                    {i !== 4 && (
                      <span className={styles.delimiter[`${showDelimiter}`]}>
                        -
                      </span>
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
                ref={expireDateMonthRef}
                id='expireDateMonth'
                name='expireDateMonth'
                className={styles.textCenter}
                htmpType='number'
                inputMode='numeric'
                placeholder='MM'
                maxLength={2}
                data-rule={'^(0[1-9]|1[0-2])$'}
                data-message={'01~12월 사이의 숫자만 입력해주세요'}
                onChange={(e) => {
                  send({
                    type: 'UPDATE',
                    data: {
                      [`expireDateMonth`]: e.target.value,
                    },
                  });
                }}
              />
              <span
                className={
                  styles.delimiter[`${data['expireDateMonth']?.length === 2}`]
                }
                style={{
                  transform: 'translateX(-6px)',
                }}
              >
                /
              </span>
              <Input
                required
                id='expireDateYear'
                ref={expireDateYearRef}
                htmpType='number'
                inputMode='numeric'
                placeholder='YY'
                name='expireDateYear'
                minLength={2}
                maxLength={2}
                onChange={(e) => {
                  send({
                    type: 'UPDATE',
                    data: {
                      [`expireDateYear`]: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </Form.Item>
          <Form.Item
            vertical
            label={
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>카드 소유자 이름(선택)</span>
                <span>{data['cardOwner']?.length || 0}/30</span>
              </div>
            }
            inputId='cardOwner'
          >
            <Input
              id='cardOwner'
              name='cardOwner'
              ref={cardOwnerRef}
              htmpType='text'
              placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
              maxLength={30}
              onChange={(e) => {
                send({
                  type: 'UPDATE',
                  data: {
                    [`cardOwner`]: e.target.value,
                  },
                });
              }}
              onBlur={() => send({ type: 'NEXT' })}
            />
          </Form.Item>
          <Form.Item vertical label={'보안코드(CVC/CVV)'} inputId={'cvc'}>
            <div className={styles.cvcInputBox}>
              <Input
                required
                id='cvc'
                name='cvc'
                ref={cvcRef}
                className={styles.cvcInputElem}
                htmpType='password'
                inputMode='numeric'
                maxLength={3}
                data-rule={'^[0-9]{3}$'}
                data-message={'숫자 3자리를 입력해주세요'}
                onChange={(e) => {
                  send({
                    type: 'UPDATE',
                    data: {
                      [`cvc`]: e.target.value,
                    },
                  });
                }}
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
                    ref={formItemRefList[`password${i}Ref`]}
                    className={styles.textCenter}
                    htmpType='password'
                    inputMode='numeric'
                    maxLength={1}
                    data-rule={'^[0-9]$'}
                    data-message={'숫자만 입력해주세요'}
                    onChange={(e) => {
                      send({
                        type: 'UPDATE',
                        data: {
                          [`password${i}`]: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              ))}
              <div className={styles.passwordPinBox}>•</div>
              <div className={styles.passwordPinBox}>•</div>
            </div>
          </Form.Item>
          <Footer className={styles.textEnd}>
            <Button htmlType='submit' type='text' disabled={!canSave}>
              다음
            </Button>
          </Footer>
        </Form>
      </main>
    </>
  );
};

export default CardInfo;
