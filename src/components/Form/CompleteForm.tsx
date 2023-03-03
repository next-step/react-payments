import { LIMIT_INPUT_LENGTH } from '@/constants';
import { Button, Input } from '../Common';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';
import { useCardListHandler } from '@/context/CardListContext';
import { useCardForm, useCardFormHandler } from '@/context/CardFormContext';

function CompleteForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    state: { cardForm },
  } = useLocation();

  const { onChange, onReset, updateCardForm } = useCardFormHandler();
  const { updateCard } = useCardListHandler();
  const { nickname } = useCardForm();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateCard(id as string, { nickname });

    onReset();
    navigate('/');
  };

  useEffect(() => {
    updateCardForm(cardForm);
  }, [cardForm]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
      <div className="h-full flex-1 flex flex-col pt-4">
        <Input
          kind="underline"
          type="text"
          name="nickname"
          placeholder="카드의 별칭을 입력해주세요."
          maxLength={LIMIT_INPUT_LENGTH.NICKNAME}
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div className="w-20 absolute bottom-2 right-2">
        <Button type="submit">다음</Button>
      </div>
    </form>
  );
}

export default CompleteForm;
