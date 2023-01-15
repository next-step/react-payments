import {
  ChangeEvent,
  createRef,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useRef,
  useState,
} from 'react';
//
import { flip } from '@/libs';
import { useRouter } from '@/hooks';
import { 카드_기본번호, 카드_테마 } from '@/constants';
import { Button, Card, Form, Input } from '@/components';
import { CardState, useCardDispatch } from '@/contexts/CardContext';
import CardCompanyModal from '@/templates/_Common/CardCompany.modal';
//
import type { FormSameNameFromTargetValidatorCallbackProps } from 'components';
import type { 카드_테마_키 } from 'literal';
import type { CardProps } from '@/components/Card/Card.types';
import NumpadModal from '@/templates/_Common/Numpad.modal';

const camelize = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase());

const 카드_초깃값: CardProps = {
  theme: 'base-theme',
  cardTitle: '',
  cardNumber: '',
  cardOwner: '',
  cardExpiration: '',
};

export default function CardAddPage() {
  const { push, back } = useRouter();
  const dispatch = useCardDispatch();
  const [firstRef, secondRef, thirdRef, fourthRef] = Array.from({ length: 4 }).map(
    createRef<HTMLInputElement>,
  );
  const focusInputRef = useRef<HTMLInputElement>();
  const [cardData, setCardData] = useState<CardProps>(카드_초깃값);
  const [isCardCompanyModalOpen, setCardCompanyModalOpen] = useState(false);
  const [isNumpadModalOpen, setNumpadModalOpen] = useState(false);
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

  const 카드_소유자_이름_길이 = cardData.cardOwner?.length;

  const onSubmit = (data: Record<string, string[]>) => {
    const card = Object.entries(data).reduce((acc, [key, value]) => {
      const fieldName = camelize(key);
      if (fieldName === 'cardNumber') return { ...acc, [fieldName]: cardData.cardNumber };
      if (fieldName === 'cardExpiration') return { ...acc, [fieldName]: cardData.cardExpiration };
      return { ...acc, [fieldName]: value.join('') };
    }, {}) as CardState;

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

    const $elements = event.currentTarget.elements;
    Form.sameNameFromTargetValidator({ $elements, $target, name: 'card-number' }, (props) =>
      cardNumberChangeHandler(props, setInputsValid, setCardData),
    );

    Form.sameNameFromTargetValidator(
      { $elements, $target, name: 'card-expiration' },
      ({ targetIndex, sameNamesElements }) => {
        const isValidLength = $target.value.length === 2;
        setInputsValid((prev) => {
          const next = [...prev];
          next[targetIndex] = isValidLength;
          return next;
        });

        if (!isValidLength) return;

        const cardExpiration = sameNamesElements.map(({ value }) => value);

        setCardData((prev) => ({ ...prev, cardExpiration: cardExpiration.join(' / ') }));

        const $nextElement = $elements[targetIndex + 1] as HTMLElement;
        $nextElement.focus();
      },
    );

    Form.sameNameFromTargetValidator({ $elements, $target, name: 'card-owner' }, () =>
      setCardData((prev) => ({ ...prev, cardOwner: $target.value })),
    );

    Form.sameNameFromTargetValidator(
      { $elements, $target, name: 'card-security-code' },
      ({ targetIndex }) => {
        const isValidLength = $target.value.length === 3;
        if (!isValidLength) return;

        const $nextElement = $elements[targetIndex + 1] as HTMLElement;
        $nextElement.focus();
      },
    );

    Form.sameNameFromTargetValidator(
      { $elements, $target, name: 'card-password' },
      ({ targetIndex }) => {
        const isValidLength = $target.value.length === 1;
        if (!isValidLength) return;

        const $nextElement = $elements[targetIndex + 1] as HTMLElement;
        $nextElement.focus();
      },
    );
  };

  /**
   * 필드 에러 체크
   * @param event
   */
  const onBlur = (event: FocusEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!Form.isInputElement($target)) return;

    const $elements = event.currentTarget.elements;
    Form.sameNameFromTargetValidator({ $elements, $target, name: 'card-number' }, (props) =>
      cardNumberBlurHandler(props, setFieldError),
    );

    Form.sameNameFromTargetValidator(
      { $elements, $target, name: 'card-expiration' },
      ({ sameNamesElements, targetIndex }) => {
        const isValid = sameNamesElements.every((element, $index) =>
          targetIndex < $index ? true : element.checkValidity(),
        );

        setFieldError((prev) => {
          const next = [...prev];
          next[1] = !isValid;
          return next;
        });
      },
    );

    Form.sameNameFromTargetValidator({ $elements, $target, name: 'card-security-code' }, () => {
      const isValid = $target.checkValidity();

      setFieldError((prev) => {
        const next = [...prev];
        next[3] = !isValid;
        return next;
      });
    });

    Form.sameNameFromTargetValidator({ $elements, $target, name: 'card-password' }, () => {
      const isValid = $target.checkValidity();

      setFieldError((prev) => {
        const next = [...prev];
        next[4] = !isValid;
        return next;
      });
    });
  };

  const handleCardCompanyModal = () => {
    setCardCompanyModalOpen(true);
  };

  const handleCardCompanySelect = ({ company }: { company: 카드_테마_키 }) => {
    if (!firstRef.current || !secondRef.current || !thirdRef.current || !fourthRef.current) return;

    const theme = flip(카드_테마)[company];
    const [first, second] = parsedCardNumber(flip(카드_기본번호)[theme]);
    firstRef.current.value = first;
    secondRef.current.value = second;
    thirdRef.current.value = '';
    fourthRef.current.value = '';

    setCardCompanyModalOpen(false);
    setCardData((prev) => ({ ...prev, cardNumber: `${first} - ${second}`, theme }));
  };

  const handleVirtualKeypad = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();

    focusInputRef.current = event.target;
    setNumpadModalOpen(true);
  };

  const handleNumpadSelect = (keypad: string) => {
    if (!focusInputRef.current) return;

    focusInputRef.current.value = `${focusInputRef.current.value}${keypad}`;

    if (focusInputRef.current.name === 'card-number' && focusInputRef.current.value.length === 4) {
      setFieldError((prev) => {
        const next = [...prev];
        next[1] = false;
        return next;
      });
      setNumpadModalOpen(false);
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

  return (
    <div className="app">
      <h2 className="page-title" onClick={back}>
        {'< 카드 추가'}
      </h2>
      <Form onSubmit={onSubmit} onChange={onChange} onBlur={onBlur}>
        <Card {...cardData} />
        <Input title="카드 번호">
          <Input.Box error={cardNumberError} errorMessage="형식이 올바르지 않습니다.">
            <Input.Label>
              <a onClick={handleCardCompanyModal}>카드 선택</a>
            </Input.Label>
            <Input.Base
              ref={firstRef}
              id="card-number-1"
              name="card-number"
              type="text"
              pattern="[0-9]+"
              minLength={4}
              maxLength={4}
              autoFocus
              required
            />
            {getIndicator(inputsValid[0])}
            <Input.Base
              ref={secondRef}
              id="card-number-2"
              name="card-number"
              type="text"
              pattern="[0-9]+"
              minLength={4}
              maxLength={4}
              required
            />
            {getIndicator(inputsValid[1])}
            <Input.Base
              ref={thirdRef}
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
            {getIndicator(inputsValid[2])}
            <Input.Base
              ref={fourthRef}
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
            className="w-50"
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
            {getIndicator(inputsValid[4], ' / ')}
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
          <Input.Box error={cardOwnerError} errorMessage="값을 입력해주세요.">
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
            className="w-25"
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
          <Input.Box error={cardPasswordError} errorMessage="숫자를 입력해주세요.">
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
        onClose={() => setNumpadModalOpen(false)}
        onSelect={handleNumpadSelect}
      />
    </div>
  );
}

const cardNumberChangeHandler = (
  {
    $elements,
    $target,
    sameNamesElements,
    targetIndex,
  }: FormSameNameFromTargetValidatorCallbackProps,
  setInputsValid: Dispatch<SetStateAction<boolean[]>>,
  setCardData: Dispatch<SetStateAction<CardProps>>,
) => {
  const cardNumberString = sameNamesElements
    .map(({ value }) => value)
    .reduce<string[]>((cardNumber, current, index) => {
      if ([0, 1].includes(index) && current) return [...cardNumber, current];
      if ([2, 3].includes(index) && current) return [...cardNumber, current.replace(/./g, '*')];
      return cardNumber;
    }, []);

  const theme = 카드_기본번호[cardNumberString.slice(0, 2).join('')];
  setCardData((prev) => ({ ...prev, cardNumber: cardNumberString.join(' - '), theme }));

  const isValidLength = $target.value.length === 4;
  setInputsValid((prev) => {
    const next = [...prev];
    next[targetIndex] = isValidLength;
    return next;
  });

  if (!isValidLength) return;

  const $nextElement = $elements[targetIndex + 1] as HTMLElement;
  $nextElement.focus();

  return cardNumberString.join(' - ');
};

const cardNumberBlurHandler = (
  { sameNamesElements, targetIndex }: FormSameNameFromTargetValidatorCallbackProps,
  setFieldError: Dispatch<SetStateAction<boolean[]>>,
) => {
  const isValid = sameNamesElements.every((element, $index) =>
    targetIndex < $index ? true : element.checkValidity(),
  );

  setFieldError((prev) => {
    const next = [...prev];
    next[0] = !isValid;
    return next;
  });
};

// util 영역
const getIndicator = (flag: boolean, indicator = ' - ') => flag && indicator;

const parsedCardNumber = (cardNumber: string) => {
  return [cardNumber.substring(0, 4), cardNumber.substring(4)];
};
