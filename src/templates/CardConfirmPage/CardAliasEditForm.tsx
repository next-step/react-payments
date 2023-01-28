import { ChangeEvent, useState } from 'react';
//
import { useCardStore, useRouter } from '@/hooks';
import { Button, Card, Form, Input } from '@/components';
//
import type { SecureCardState } from 'literal';

type CardAliasEditFormProps = {
  isEditPage: boolean;
  currentCard: SecureCardState;
  deleteTargetCard?: SecureCardState;
};

const CardAliasEditForm = ({
  isEditPage,
  currentCard,
  deleteTargetCard,
}: CardAliasEditFormProps) => {
  const { push } = useRouter();
  const { editCard, delCard } = useCardStore();

  const [cardTitle, setCardTitle] = useState(currentCard.cardTitle);

  const onSubmit = () => {
    const editedCard = { ...currentCard, cardTitle };

    editCard(editedCard);
    push('/');
  };

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const $target = event.target;
    if (!Form.isInputElement($target)) return;

    setCardTitle($target.value);
  };

  const handleDeleteCardClick = () => {
    if (!deleteTargetCard) return;

    delCard(deleteTargetCard);
    push('/');
  };

  return (
    <Form onSubmit={onSubmit} onChange={onChange}>
      <Card size="big" {...currentCard} cardTitle={cardTitle} />
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
  );
};

export default CardAliasEditForm;
