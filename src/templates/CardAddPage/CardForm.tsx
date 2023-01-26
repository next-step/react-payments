import { ChangeEvent, createRef, FocusEvent, useRef, useState } from 'react';
//
import { useRouter } from '@/hooks';
import { Button, Card, Form, Input } from '@/components';
import { 카드_기본번호, 카드_테마 } from '@/constants';
import { useCardDispatch } from '@/contexts';
import { condIndicator, flip, splitToCount } from '@/utils';
import cardFormService from './CardForm.service';
import CardCompanyModal from './CardCompany.modal';
import NumpadModal from './Numpad.modal';
//
import type { 카드_테마_키 } from 'literal';
import type { CardProps } from '@/components/Card/Card.types';

const 카드_초깃값: CardProps = {
  theme: 'base-theme',
  cardTitle: '',
  cardNumber: '',
  cardOwner: '',
  cardExpiration: '',
};

const CardForm = () => {
  const { push } = useRouter();
  const dispatch = useCardDispatch();

  const formRef = useRef<HTMLFormElement | null>(null);
  const focusInputRef = useRef<HTMLInputElement>();
  const cardNumberRefs = Array.from({ length: 4 }).map(createRef<HTMLInputElement>);

  const [cardData, setCardData] = useState<CardProps>(카드_초깃값);
  const [
    [
      cardNumberError,
      cardExpirationError,
      cardOwnerError,
      cardSecurityCodeError,
      cardPasswordError,
    ],
    setFieldError,
  ] = useState(Array.from({ length: 5 }).map(() => false));
  const [inputsValid, setInputsValid] = useState(Array.from({ length: 6 }).map(() => false));
  const [isCardCompanyModalOpen, setCardCompanyModalOpen] = useState(false);
  const [isNumpadModalOpen, setNumpadModalOpen] = useState(false);

  const 카드_소유자_이름_길이 = cardData.cardOwner?.length;

  const handleCardCompanyModal = () => {
    setCardCompanyModalOpen(true);
  };

  const handleCardCompanySelect = ({ company }: { company: 카드_테마_키 }) => {
    if (cardNumberRefs.some(({ current }) => !current)) return;

    const theme = flip(카드_테마)[company];
    const [first, second] = splitToCount(flip(카드_기본번호)[theme]);
    cardNumberRefs.forEach((cardNumberInputRef, index) => {
      if (!cardNumberInputRef.current) return;
      let value = '';
      if (index === 0) value = first;
      if (index === 1) value = second;
      cardNumberInputRef.current.value = value;
    });

    setCardCompanyModalOpen(false);
    setCardData((prev) => ({ ...prev, cardNumber: `${first} - ${second}`, theme }));
  };

  const handleVirtualKeypad = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();

    focusInputRef.current = event.target;
    if (focusInputRef.current.name === 'card-number' && focusInputRef.current.value.length === 4) {
      focusInputRef.current.value = '';
    }

    if (
      focusInputRef.current.name === 'card-security-code' &&
      focusInputRef.current.value.length === 3
    ) {
      focusInputRef.current.value = '';
    }

    setNumpadModalOpen(true);
  };

  const handleNumpadSelect = (keypad: string) => {
    if (!focusInputRef.current) return;
    if (!formRef.current) return;

    focusInputRef.current.value = `${focusInputRef.current.value}${keypad}`;

    if (focusInputRef.current.name === 'card-number') {
      setCardData((prev) => ({
        ...prev,
        cardNumber: new FormData(formRef.current as HTMLFormElement)
          .getAll('card-number')
          .map((item, index) =>
            index === 3 || index === 2 ? item.toString().replace(/./g, '*') : item,
          )
          .join(' - '),
      }));

      if (focusInputRef.current.value.length === 4) {
        if (focusInputRef.current.id === 'card-number-3') {
          setInputsValid((prev) => {
            const next = [...prev];
            next[2] = true;
            return next;
          });
        }

        setFieldError((prev) => {
          const next = [...prev];
          next[1] = false;
          return next;
        });

        setNumpadModalOpen(false);
      }
      return;
    }

    if (
      focusInputRef.current.name === 'card-security-code' &&
      focusInputRef.current.value.length === 3
    ) {
      setFieldError((prev) => {
        const next = [...prev];
        next[3] = false;
        return next;
      });
      setNumpadModalOpen(false);
      return;
    }
  };

  const onSubmit = (data: Record<string, string[]>) => {
    const card = cardFormService.cardStateGenerator(data, cardData);
    dispatch({ type: 'ADD_CARD', card: { ...card, theme: cardData.theme } });

    push('/confirmation');
  };

  /**
   * 실시간 UI 렌더링
   * @param event
   */
  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!Form.isInputElement($target)) return;

    const nextFocus = Form.nextInputFocus(event);

    Form.getNameValidator(event, 'card-number', (params) => {
      const { cardNumber, theme, isValidLength } = cardFormService.cardNumberChangeHandler(params);

      setCardData((prev) => ({ ...prev, cardNumber, theme }));
      setInputsValid((prev) => {
        const next = [...prev];
        next[params.index] = isValidLength;
        return next;
      });

      if (!isValidLength) return;

      nextFocus(params.index);
    });

    Form.getNameValidator(event, 'card-expiration', (params) => {
      const { cardExpiration, isValidLength } = cardFormService.cardExpirationChangeHandler(params);

      setCardData((prev) => ({ ...prev, cardExpiration }));
      setInputsValid((prev) => {
        const next = [...prev];
        next[params.index] = isValidLength;
        return next;
      });

      if (!isValidLength) return;

      nextFocus(params.index);
    });

    Form.getNameValidator(event, 'card-owner', () =>
      setCardData((prev) => ({ ...prev, cardOwner: $target.value })),
    );

    Form.getNameValidator(event, 'card-security-code', ({ index }) => {
      const isValidLength = $target.value.length === 3;
      if (!isValidLength) return;

      nextFocus(index);
    });

    Form.getNameValidator(event, 'card-password', ({ index }) => {
      const isValidLength = $target.value.length === 1;
      if (!isValidLength) return;

      nextFocus(index);
    });
  };

  /**
   * 필드 에러 체크
   * @param event
   */
  const onBlur = (event: FocusEvent<HTMLFormElement>) => {
    Form.getNameValidator(event, 'card-number', (params) => {
      const isValid = cardFormService.fieldCheckValidity(params);

      setFieldError((prev) => {
        const next = [...prev];
        next[0] = !isValid;
        return next;
      });
    });

    Form.getNameValidator(event, 'card-expiration', (params) => {
      const isValid = cardFormService.fieldCheckValidity(params);

      setFieldError((prev) => {
        const next = [...prev];
        next[1] = !isValid;
        return next;
      });
    });

    Form.getNameValidator(event, 'card-security-code', () => {
      const isValid = event.target.checkValidity();

      setFieldError((prev) => {
        const next = [...prev];
        next[3] = !isValid;
        return next;
      });
    });

    Form.getNameValidator(event, 'card-password', () => {
      const isValid = event.target.checkValidity();

      setFieldError((prev) => {
        const next = [...prev];
        next[4] = !isValid;
        return next;
      });
    });
  };

  return (
    <>
      <Form onSubmit={onSubmit} onChange={onChange} onBlur={onBlur} ref={formRef}>
        <Card {...cardData} />
        <Input title="카드 번호">
          <Input.Box
            className="input-box"
            error={cardNumberError}
            errorMessage="형식이 올바르지 않습니다."
          >
            <Input.Label>
              <a onClick={handleCardCompanyModal}>카드 선택</a>
            </Input.Label>
            <Input.Base
              ref={cardNumberRefs[0]}
              id="card-number-1"
              name="card-number"
              type="text"
              pattern="[0-9]+"
              minLength={4}
              maxLength={4}
              autoFocus
              required
            />
            {condIndicator(inputsValid[0])}
            <Input.Base
              ref={cardNumberRefs[1]}
              id="card-number-2"
              name="card-number"
              type="text"
              pattern="[0-9]+"
              minLength={4}
              maxLength={4}
              required
            />
            {condIndicator(inputsValid[1])}
            <Input.Base
              ref={cardNumberRefs[2]}
              id="card-number-3"
              name="card-number"
              type="password"
              pattern="[0-9]+"
              minLength={4}
              maxLength={4}
              required
              readOnly
              onFocus={handleVirtualKeypad}
            />
            {condIndicator(inputsValid[2])}
            <Input.Base
              ref={cardNumberRefs[3]}
              id="card-number-4"
              name="card-number"
              type="password"
              pattern="[0-9]+"
              minLength={4}
              maxLength={4}
              required
              readOnly
              onFocus={handleVirtualKeypad}
            />
          </Input.Box>
        </Input>
        <Input title="만료일">
          <Input.Box
            className="input-box w-50"
            error={cardExpirationError}
            errorMessage="형식이 올바르지 않습니다."
          >
            <Input.Base
              name="card-expiration"
              type="text"
              placeholder="MM"
              pattern="^(0[1-9]|1[012])$"
              minLength={2}
              maxLength={2}
              required
            />
            {condIndicator(inputsValid[4], ' / ')}
            <Input.Base
              name="card-expiration"
              type="text"
              placeholder="YY"
              pattern="^(2[3-9]|[3-9][0-9])$"
              minLength={2}
              maxLength={2}
              required
            />
          </Input.Box>
        </Input>
        <Input title="카드 소유자 이름(선택)">
          <Input.Box className="input-box" error={cardOwnerError} errorMessage="값을 입력해주세요.">
            <Input.Label>
              {카드_소유자_이름_길이} / {30}
            </Input.Label>
            <Input.Base
              name="card-owner"
              className="input-basic"
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              maxLength={30}
              required
            />
          </Input.Box>
        </Input>
        <Input title="보안코드(CVC/CVV)">
          <Input.Box
            className="input-box w-25"
            error={cardSecurityCodeError}
            errorMessage="숫자를 입력해주세요."
          >
            <Input.Base
              name="card-security-code"
              type="password"
              className="w-25"
              pattern="[0-9]+"
              minLength={3}
              maxLength={3}
              required
              readOnly
              onFocus={handleVirtualKeypad}
            />
          </Input.Box>
        </Input>
        <Input title="카드 비밀번호">
          <Input.Box
            className="input-box"
            error={cardPasswordError}
            errorMessage="숫자를 입력해주세요."
          >
            <Input.Base
              name="card-password"
              type="password"
              className="w-15"
              pattern="[0-9]+"
              minLength={1}
              maxLength={1}
              required
            />
            <Input.Base
              name="card-password"
              type="password"
              className="w-15"
              pattern="[0-9]+"
              minLength={1}
              maxLength={1}
              required
            />
            <Input.Base type="password" className="w-15" disabled value="*" />
            <Input.Base type="password" className="w-15" disabled value="*" />
          </Input.Box>
        </Input>
        <div className="button-box">
          <Button type="submit">다음</Button>
        </div>
      </Form>
      <CardCompanyModal
        open={isCardCompanyModalOpen}
        onSelect={handleCardCompanySelect}
        onClose={() => setCardCompanyModalOpen(false)}
      />
      <NumpadModal
        open={isNumpadModalOpen}
        onSelect={handleNumpadSelect}
        onClose={() => setNumpadModalOpen(false)}
      />
    </>
  );
};

export default CardForm;
