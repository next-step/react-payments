import { ChangeEvent, createRef, FocusEvent, useRef, useState } from 'react';
//
import { useCardStore, useRouter } from '@/hooks';
import { Button, Card, Form, Input } from '@/components';
import {
  카드_넘버,
  카드_넘버_개별_길이,
  카드_만료일,
  카드_만료일_개별_길이,
  카드_번호_영역_개수,
  카드_보안코드,
  카드_비밀번호,
  카드_소유자,
  카드_소유자_최대_길이,
  카드_입력칸_유효성_초깃값,
  카드_추가_초깃값,
  카드_필드_에러_초깃값,
  카드_확인_페이지,
} from '@/constants';
import { condIndicator } from '@/utils';
import * as Service from './CardForm.service';
import CardCompanyModal from './CardCompany.modal';
import NumpadModal from './Numpad.modal';
//
import type { CardProps } from 'components';
import type { CardThemeKeys } from 'literal';

const CardForm = () => {
  const { push } = useRouter();
  const { addCard } = useCardStore();

  const formRef = useRef<HTMLFormElement | null>(null);
  const focusInputRef = useRef<HTMLInputElement>();
  const cardNumberRefs = Array.from(카드_번호_영역_개수).map(createRef<HTMLInputElement>);

  const [cardData, setCardData] = useState<CardProps>(카드_추가_초깃값);
  const [
    [
      cardNumberError,
      cardExpirationError,
      cardOwnerError,
      cardSecurityCodeError,
      cardPasswordError,
    ],
    setFieldError,
  ] = useState(카드_필드_에러_초깃값);
  const [inputsValid, setInputsValid] = useState(카드_입력칸_유효성_초깃값);
  const [isCardCompanyModalOpen, setCardCompanyModalOpen] = useState(false);
  const [isNumpadModalOpen, setNumpadModalOpen] = useState(false);

  const 카드_소유자_이름_길이 = cardData.cardOwner?.length;

  const handleCardCompanyModal = () => setCardCompanyModalOpen(true);

  const handleCardCompanySelect = ({ company }: { company: CardThemeKeys }) => {
    if (cardNumberRefs.some(({ current }) => !current)) return;

    const [first, second, theme] = Service.changeCardCompanyNumber(company, cardNumberRefs);

    setCardCompanyModalOpen(false);
    setCardData((prev) => ({ ...prev, cardNumber: `${first} - ${second}`, theme }));
  };

  const handleVirtualKeypad = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    focusInputRef.current = event.target;

    Service.resetCardAreaValue(focusInputRef);

    setNumpadModalOpen(true);
  };

  const handleNumpadSelect = (keypad: string) => {
    if (!focusInputRef.current) return;
    if (!formRef.current) return;

    focusInputRef.current.value = `${focusInputRef.current.value}${keypad}`;

    const targetIsCardNumber = Service.isValidFieldLength(focusInputRef, 카드_넘버, () =>
      setCardData((prev) => ({ ...prev, cardNumber: Service.parseCardNumber(formRef) })),
    );

    if (targetIsCardNumber) {
      setFieldError((prev) => {
        const next = [...prev];
        next[1] = false;
        return next;
      });

      setInputsValid((prev) => {
        const next = [...prev];
        next[2] = true;
        return next;
      });

      return setNumpadModalOpen(false);
    }

    if (Service.isValidFieldLength(focusInputRef, 카드_보안코드)) {
      setFieldError((prev) => {
        const next = [...prev];
        next[3] = false;
        return next;
      });

      return setNumpadModalOpen(false);
    }
  };

  const onSubmit = (data: Record<string, string[]>) => {
    const newCard = Service.cardStateGenerator(data, cardData);

    addCard({ ...newCard, theme: cardData.theme });
    push(카드_확인_페이지);
  };

  /**
   * 실시간 UI 렌더링
   * @param event
   */
  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!Form.isInputElement($target)) return;

    const nextFocus = Form.nextInputFocus(event);

    Form.getNameValidator(event, 카드_넘버, (params) => {
      const { cardNumber, theme, isValidLength } = Service.cardNumberChangeHandler(params);

      setCardData((prev) => ({ ...prev, cardNumber, theme }));
      setInputsValid((prev) => {
        const next = [...prev];
        next[params.index] = isValidLength;
        return next;
      });

      if (!isValidLength) return;

      nextFocus(params.index);
    });

    Form.getNameValidator(event, 카드_만료일, (params) => {
      const { cardExpiration, isValidLength } = Service.cardExpirationChangeHandler(params);

      setCardData((prev) => ({ ...prev, cardExpiration }));
      setInputsValid((prev) => {
        const next = [...prev];
        next[params.index] = isValidLength;
        return next;
      });

      if (!isValidLength) return;

      nextFocus(params.index);
    });

    Form.getNameValidator(event, 카드_소유자, () =>
      setCardData((prev) => ({ ...prev, cardOwner: $target.value })),
    );

    Form.getNameValidator(event, 카드_보안코드, ({ index }) => {
      const isValidLength = $target.value.length === 3;
      if (!isValidLength) return;

      nextFocus(index);
    });

    Form.getNameValidator(event, 카드_비밀번호, ({ index }) => {
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
    Form.getNameValidator(event, 카드_넘버, (params) => {
      const isValid = Service.fieldCheckValidity(params);

      setFieldError((prev) => {
        const next = [...prev];
        next[0] = !isValid;
        return next;
      });
    });

    Form.getNameValidator(event, 카드_만료일, (params) => {
      const isValid = Service.fieldCheckValidity(params);

      setFieldError((prev) => {
        const next = [...prev];
        next[1] = !isValid;
        return next;
      });
    });

    Form.getNameValidator(event, 카드_보안코드, () => {
      const isValid = event.target.checkValidity();

      setFieldError((prev) => {
        const next = [...prev];
        next[3] = !isValid;
        return next;
      });
    });

    Form.getNameValidator(event, 카드_비밀번호, () => {
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
              name={카드_넘버}
              type="text"
              pattern="[0-9]+"
              minLength={카드_넘버_개별_길이}
              maxLength={카드_넘버_개별_길이}
              autoFocus
              required
            />
            {condIndicator(inputsValid[0])}
            <Input.Base
              ref={cardNumberRefs[1]}
              name={카드_넘버}
              type="text"
              pattern="[0-9]+"
              minLength={카드_넘버_개별_길이}
              maxLength={카드_넘버_개별_길이}
              required
            />
            {condIndicator(inputsValid[1])}
            <Input.Base
              ref={cardNumberRefs[2]}
              name={카드_넘버}
              type="password"
              pattern="[0-9]+"
              minLength={카드_넘버_개별_길이}
              maxLength={카드_넘버_개별_길이}
              required
              readOnly
              onFocus={handleVirtualKeypad}
            />
            {condIndicator(inputsValid[2])}
            <Input.Base
              ref={cardNumberRefs[3]}
              name={카드_넘버}
              type="password"
              pattern="[0-9]+"
              minLength={카드_넘버_개별_길이}
              maxLength={카드_넘버_개별_길이}
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
              name={카드_만료일}
              type="text"
              placeholder="MM"
              pattern="^(0[1-9]|1[012])$"
              minLength={카드_만료일_개별_길이}
              maxLength={카드_만료일_개별_길이}
              required
            />
            {condIndicator(inputsValid[4], ' / ')}
            <Input.Base
              name={카드_만료일}
              type="text"
              placeholder="YY"
              pattern="^(2[3-9]|[3-9][0-9])$"
              minLength={카드_만료일_개별_길이}
              maxLength={카드_만료일_개별_길이}
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
              name={카드_소유자}
              className="input-basic"
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              maxLength={카드_소유자_최대_길이}
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
              name={카드_보안코드}
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
              name={카드_비밀번호}
              type="password"
              className="w-15"
              pattern="[0-9]+"
              minLength={1}
              maxLength={1}
              required
            />
            <Input.Base
              name={카드_비밀번호}
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
