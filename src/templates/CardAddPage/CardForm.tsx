import { ChangeEvent, createRef, FocusEvent, useRef, useState } from 'react';
//
import { useRouter } from '@/hooks';
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
  카드_확인_페이지,
} from '@/constants';
import * as Service from './CardForm.service';
import CardCompanyModal from './CardCompany.modal';
import NumpadModal from './Numpad.modal';
//
import type { CardThemeKeys } from 'literal';
import { useCardData, useCardFieldError, useInputsValid } from './hooks';

const CardForm = () => {
  const { push } = useRouter();

  const { cardData, cardOwnerLength, updateCard, submitCard } = useCardData();
  const { indicator, setInputValid } = useInputsValid();
  const { error, set } = useCardFieldError();

  const formRef = useRef<HTMLFormElement | null>(null);
  const focusInputRef = useRef<HTMLInputElement>();
  const cardNumberRefs = Array.from(카드_번호_영역_개수).map(createRef<HTMLInputElement>);

  const [isCardCompanyModalOpen, setCardCompanyModalOpen] = useState(false);
  const [isNumpadModalOpen, setNumpadModalOpen] = useState(false);

  const handleCardCompanyModal = () => setCardCompanyModalOpen(true);

  const handleCardCompanySelect = ({ company }: { company: CardThemeKeys }) => {
    if (cardNumberRefs.some(({ current }) => !current)) return;

    const [first, second, theme] = Service.changeCardCompanyNumber(company, cardNumberRefs);

    setCardCompanyModalOpen(false);
    updateCard({ cardNumber: `${first} - ${second}`, theme });
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
      updateCard({ cardNumber: Service.parseCardNumber(formRef) }),
    );

    if (targetIsCardNumber) {
      set.cardExpirationError(false);

      setInputValid(2, true);

      return setNumpadModalOpen(false);
    }

    if (Service.isValidFieldLength(focusInputRef, 카드_보안코드)) {
      set.cardSecurityCodeError(false);

      return setNumpadModalOpen(false);
    }
  };

  const onSubmit = (data: Record<string, string[]>) => {
    const newCard = Service.cardStateGenerator(data, cardData);
    submitCard({ ...newCard, theme: cardData.theme });
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
      updateCard({ cardNumber, theme });
      setInputValid(params.index, isValidLength);

      if (!isValidLength) return;

      nextFocus(params.index);
    });

    Form.getNameValidator(event, 카드_만료일, (params) => {
      const { cardExpiration, isValidLength } = Service.cardExpirationChangeHandler(params);
      updateCard({ cardExpiration });
      setInputValid(params.index - 1, isValidLength);

      if (!isValidLength) return;

      nextFocus(params.index);
    });

    Form.getNameValidator(event, 카드_소유자, () => updateCard({ cardOwner: $target.value }));

    Form.getNameValidator(
      event,
      카드_보안코드,
      ({ index }) => $target.value.length === 3 && nextFocus(index),
    );

    Form.getNameValidator(
      event,
      카드_비밀번호,
      ({ index }) => $target.value.length === 1 && nextFocus(index),
    );
  };

  /**
   * 필드 에러 체크
   * @param event
   */
  const onBlur = (event: FocusEvent<HTMLFormElement>) => {
    Form.getNameValidator(event, 카드_넘버, (params) => {
      set.cardNumberError(!Service.fieldCheckValidity(params));
    });

    Form.getNameValidator(event, 카드_만료일, (params) => {
      set.cardExpirationError(!Service.fieldCheckValidity(params));
    });

    Form.getNameValidator(event, 카드_보안코드, () => {
      set.cardSecurityCodeError(!event.target.checkValidity());
    });

    Form.getNameValidator(event, 카드_비밀번호, () => {
      set.cardPasswordError(!event.target.checkValidity());
    });
  };

  return (
    <>
      <Form onSubmit={onSubmit} onChange={onChange} onBlur={onBlur} ref={formRef}>
        <Card {...cardData} />
        <Input title="카드 번호">
          <Input.Box
            className="input-box"
            error={error.cardNumberError}
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
            {indicator.number1}
            <Input.Base
              ref={cardNumberRefs[1]}
              name={카드_넘버}
              type="text"
              pattern="[0-9]+"
              minLength={카드_넘버_개별_길이}
              maxLength={카드_넘버_개별_길이}
              required
            />
            {indicator.number2}
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
            {indicator.number3}
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
            error={error.cardExpirationError}
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
            {indicator.expiration}
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
          <Input.Box
            className="input-box"
            error={error.cardOwnerError}
            errorMessage="값을 입력해주세요."
          >
            <Input.Label>{cardOwnerLength}</Input.Label>
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
            error={error.cardSecurityCodeError}
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
            error={error.cardPasswordError}
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
