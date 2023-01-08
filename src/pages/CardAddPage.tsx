import { ChangeEvent, useState } from 'react';
//
import { Button, Card, Form, Input } from '@/components';
import CardCompanyModal from '@/templates/_Common/CardCompany.modal';
import { CardProvider } from '@/templates/CardAddPage';
import { getDash } from '@/libs';

export default function CardAddPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputsValid, setInputsValid] = useState(Array.from({ length: 4 }).map(() => false));

  const onSubmit = (data: FormData) => {
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!($target instanceof HTMLInputElement)) {
      return;
    }

    if ($target.name === 'card-owner') {
      return;
    }

    const isValid = $target.checkValidity();
    if (!isValid) {
      return;
    }

    const $elements = event.currentTarget.elements;
    // const namedGroupIndex = (
    //   [...$elements].filter((element) => element.name.includes($target.name)) as HTMLInputElement[]
    // ).findIndex(({ validity: { valid } }) => !valid);

    // console.log(namedGroupIndex);
    const index = [...$elements].findIndex((element) => element === $target);
    if (index === -1) {
      return;
    }

    // if (namedGroupIndex === -1) {
    //   const $nextElement = $elements[index + 1] as HTMLElement;
    //   $nextElement.focus();
    //   return;
    // }

    const $nextElement = $elements[index + 1] as HTMLElement;
    $nextElement.focus();
  };

  return (
    <div className="app">
      <h2 className="page-title">{'< 카드 추가'}</h2>
      <CardProvider>
        <Form onSubmit={onSubmit} onChange={onChange}>
          <Card />
          <Input title="카드 번호">
            <Input.Box errorMessage={inputsValid[0] ? '' : '형식이 올바르지 않습니다.'}>
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
              {getDash(inputsValid[0])}
              <Input.Base
                id="card-numbers-2"
                name="card-numbers"
                type="text"
                pattern="[0-9]+"
                minLength={4}
                maxLength={4}
                required
              />
              {getDash(inputsValid[1])}
              <Input.Base
                id="card-numbers-3"
                name="card-numbers"
                type="password"
                pattern="[0-9]+"
                minLength={4}
                maxLength={4}
                required
              />
              {getDash(inputsValid[2])}
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
            <Input.Box className="w-50">
              <Input.Base
                type="text"
                placeholder="MM"
                pattern="[0-2]+"
                minLength={2}
                maxLength={2}
                required
              />
              <Input.Base
                type="text"
                placeholder="YY"
                pattern="[0-9]+"
                minLength={2}
                maxLength={2}
                required
              />
            </Input.Box>
          </Input>
          <Input title="카드 소유자 이름(선택)">
            <Input.Box>
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
