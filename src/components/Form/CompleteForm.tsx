import { LIMIT_INPUT_LENGTH } from '@/constants';
import { Button } from '../Common';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useId } from 'react';
import { useCardListHandler } from '@/context/CardListContext';
import { useCardForm, useCardFormHandler } from '@/context/CardFormContext';

function CompleteForm() {
  const navigate = useNavigate();
  const id = useId();

  const { onChange, onReset } = useCardFormHandler();
  const { addCard } = useCardListHandler();
  const cardFormValue = useCardForm();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCard({ ...cardFormValue, id });
    onReset();
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
          value={cardFormValue.nickname}
          onChange={onChange}
        />
      </div>
      <div className="button-box mt-50">
        <Button type="submit" className="button-text">
          <span className="button-text">다음</span>
        </Button>
      </div>
    </form>
  );
}

export default CompleteForm;
