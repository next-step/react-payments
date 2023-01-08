import { ChangeEvent, Dispatch, FocusEvent, SetStateAction, useState } from 'react';
//
import { getIndicator } from '@/libs';
import { useRouter } from '@/hooks';
import { Button, Card, Form, Input } from '@/components';
import CardCompanyModal from '@/templates/_Common/CardCompany.modal';
import { CardProvider, useCardState } from '@/templates/CardAddPage';
//
import type { FormSameNameFromTargetValidatorCallbackProps } from 'components';

export default function CardAddPage() {
  const cardData = useCardState();
  const { back } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [[cardNumbersError, cardExpirationError, cardOwnerError], setFieldError] = useState(
    Array.from({ length: 5 }).map(() => false),
  );
  const [inputsValid, setInputsValid] = useState(Array.from({ length: 6 }).map(() => false));

  const onSubmit = (data: FormData) => {
    console.log(Object.fromEntries(data.entries()));
  };

  /**
   * 실시간 UI 렌더링
   * @param event
   */
  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!Form.isInputElement($target)) return;

    const $elements = event.currentTarget.elements;
    Form.sameNameFromTargetValidator({ $elements, $target, name: 'card-numbers' }, (props) =>
      cardNumberChangeHandler(props, setInputsValid),
    );

    Form.sameNameFromTargetValidator(
      { $elements, $target, name: 'card-expiration' },
      ({ targetIndex }) => {
        const isValidLength = $target.value.length === 2;
        setInputsValid((prev) => {
          const next = [...prev];
          next[targetIndex] = isValidLength;
          return next;
        });

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
    Form.sameNameFromTargetValidator({ $elements, $target, name: 'card-numbers' }, (props) =>
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
  };

  return (
    <div className="app">
      <h2 className="page-title" onClick={() => back()}>
        {'< 카드 추가'}
      </h2>
      <CardProvider>
        <Form onSubmit={onSubmit} onChange={onChange} onBlur={onBlur}>
          <Card {...cardData} />
          <Input title="카드 번호">
            <Input.Box error={cardNumbersError} errorMessage="형식이 올바르지 않습니다.">
              <Input.Base
                id="card-numbers-1"
                name="card-numbers"
                type="text"
                pattern="[0-9]+"
                minLength={4}
                maxLength={4}
                autoFocus
                required
              />
              {getIndicator(inputsValid[0])}
              <Input.Base
                id="card-numbers-2"
                name="card-numbers"
                type="text"
                pattern="[0-9]+"
                minLength={4}
                maxLength={4}
                required
              />
              {getIndicator(inputsValid[1])}
              <Input.Base
                id="card-numbers-3"
                name="card-numbers"
                type="password"
                pattern="[0-9]+"
                minLength={4}
                maxLength={4}
                required
              />
              {getIndicator(inputsValid[2])}
              <Input.Base
                id="card-numbers-4"
                name="card-numbers"
                type="password"
                pattern="[0-9]+"
                minLength={4}
                maxLength={4}
                required
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
                type="text"
                name="card-expiration"
                placeholder="MM"
                pattern="^(0[1-9]|1[012])$"
                minLength={2}
                maxLength={2}
                required
              />
              {getIndicator(inputsValid[4], ' / ')}
              <Input.Base
                type="text"
                name="card-expiration"
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
            <Input.Box>
              <Input.Base
                type="password"
                className="w-25"
                pattern="[0-9]+"
                minLength={3}
                maxLength={3}
                required
              />
            </Input.Box>
          </Input>
          <Input title="카드 비밀번호">
            <Input.Box>
              <Input.Base
                type="password"
                className="w-15"
                pattern="[0-9]+"
                minLength={1}
                maxLength={1}
                required
              />
              <Input.Base
                type="password"
                className="w-15"
                pattern="[0-9]+"
                minLength={1}
                maxLength={1}
                required
              />
              <Input.Base type="password" className="w-15" readOnly value="*" />
              <Input.Base type="password" className="w-15" readOnly value="*" />
            </Input.Box>
          </Input>
          <div className="button-box">
            <Button type="submit">다음</Button>
          </div>
        </Form>
        <CardCompanyModal open={isOpen} onClose={() => setIsOpen(false)} />
      </CardProvider>
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
) => {
  const isValidLength = $target.value.length === 4;
  setInputsValid((prev) => {
    const next = [...prev];
    next[targetIndex] = isValidLength;
    return next;
  });

  if (!isValidLength) return;

  const $nextElement = $elements[targetIndex + 1] as HTMLElement;
  $nextElement.focus();
};

const cardNumberBlurHandler = (
  {
    $elements,
    $target,
    sameNamesElements,
    targetIndex,
  }: FormSameNameFromTargetValidatorCallbackProps,
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
