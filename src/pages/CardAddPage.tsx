import { Button, Card, Form, Input } from '@/components';
import { CardProvider, InputCardNumbers } from '@/templates/CardAddPage';
import { ChangeEvent } from 'react';

export default function CardAddPage() {
  const onSubmit = (data: FormData) => {
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!($target instanceof HTMLInputElement)) {
      return;
    }

    const isValid = $target.checkValidity();
    if (!isValid) {
      return;
    }

    const $elements = event.currentTarget.elements;
    const index = [...$elements].findIndex((element) => element === $target);
    if (index === -1) {
      return;
    }

    const $nextElement = $elements[index + 1] as HTMLElement;
    $nextElement.focus();
  };

  return (
    <div className="app">
      <h2 className="page-title">{'< 카드 추가'}</h2>
      <CardProvider>
        <Form onSubmit={onSubmit} onChange={onChange}>
          <Card />
          <InputCardNumbers />
          <Input title="만료일">
            <Input.Box className="w-50">
              <Input.Base type="text" placeholder="MM" />
              <Input.Base type="text" placeholder="YY" />
            </Input.Box>
          </Input>
          <Input title="카드 소유자 이름(선택)">
            <Input.Box>
              <Input.Base
                type="text"
                className="input-basic"
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              />
            </Input.Box>
          </Input>
          <Input title="보안코드(CVC/CVV)">
            <Input.Box>
              <Input.Base className="w-25" type="password" />
            </Input.Box>
          </Input>
          <Input title="카드 비밀번호">
            <Input.Box>
              <Input.Base className="w-15" type="password" />
              <Input.Base className="w-15" type="password" />
              <Input.Base className="w-15" type="password" />
              <Input.Base className="w-15" type="password" />
            </Input.Box>
          </Input>
          <div className="button-box">
            <Button type="submit">다음</Button>
          </div>
        </Form>
      </CardProvider>
    </div>
  );
}
