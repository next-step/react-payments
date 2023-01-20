import { Button, Card, Form, Input } from '@/components';
import { CardState, useCardDispatch, useCardState } from '@/contexts/CardContext';
import { useRouter, useRouteState } from '@/hooks';
import { ChangeEvent, useLayoutEffect, useState } from 'react';

export default function CardConfirmPage() {
  const { push } = useRouter();
  const { params } = useRouteState();
  const cardState = useCardState();
  const dispatch = useCardDispatch();
  const { cardPassword, cardSecurityCode, ...추가한_카드_정보 } = cardState.at(-1) as CardState;
  const [isEditPage, setEditPage] = useState(false);
  const [cardTitle, setCardTitle] = useState(추가한_카드_정보.cardTitle);

  useLayoutEffect(() => {
    setEditPage(Boolean(params));
  }, [params]);

  const onSubmit = () => {
    dispatch({ type: 'EDIT_CARD', card: { ...추가한_카드_정보, cardTitle } });

    push('/');
  };

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!Form.isInputElement($target)) return;
    setCardTitle($target.value);
  };

  const handleDeleteCardClick = () => {
    if (!params) return;
    const { card: deleteTargetCard } = params;

    dispatch({ type: 'DEL_CARD', card: deleteTargetCard });

    push('/');
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">
          {isEditPage ? '카드의 별칭을 수정해주세요.' : '카드 등록이 완료되었습니다.'}
        </h2>
      </div>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Card size="big" {...추가한_카드_정보} cardTitle={cardTitle} />
        <Input className="flex-center w-100">
          <Input.Box>
            <Input.Base className="w-75" type="text" placeholder="카드의 별칭을 입력해주세요." />
          </Input.Box>
        </Input>
        <div className="button-box flex-space-between mt-50">
          {isEditPage && <Button onClick={handleDeleteCardClick}>삭제</Button>}
          <Button type="submit">{isEditPage ? '완료' : '다음'}</Button>
        </div>
      </Form>
    </div>
  );
}
