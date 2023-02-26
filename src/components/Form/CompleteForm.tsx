import { LIMIT_INPUT_LENGTH } from '@/constants';
import { Button } from '../Common';
import { useNavigate, useParams } from 'react-router-dom';
import { FormEvent } from 'react';
import { useCardListHandler } from '@/context/CardListContext';
import { useCardForm, useCardFormHandler } from '@/context/CardFormContext';

function CompleteForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { onChange, onReset } = useCardFormHandler();
  const { updateCard, deleteCard } = useCardListHandler();
  const { nickname } = useCardForm();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateCard(id as string, { nickname });
    onReset();
    navigate('/');
  };

  const onDelete = () => {
    if (!id) return;
    deleteCard(id);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-100"
          type="text"
          name="nickname"
          placeholder="카드의 별칭을 입력해주세요."
          maxLength={LIMIT_INPUT_LENGTH.NICKNAME}
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div className="button-box mt-50">
        {id ? <Button onClick={onDelete}>삭제</Button> : null}
        <Button type="submit" className="button-text">
          <span className="button-text">다음</span>
        </Button>
      </div>
    </form>
  );
}

export default CompleteForm;
