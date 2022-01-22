import { useState, useEffect } from 'react';
import {
  INIT_CARD_STATE,
  CARD_NUMBER,
  EXPIRY_DATE,
  OWNER,
  CVC,
  PASSWORD,
  INPUT_LENGTH,
} from '@/constants/index';
import { Input } from '@/components/Forms/Input/index';
import InputBox from '@/components/Forms/InputBox';
import InputContainer from '@/components/Forms/InputContainer';
import Modal from '@/components/Modal';
import useNextFieldRef from '@/hooks/useNextFieldRef';
import { newStateProps, changeCardStateType } from '@/pages/NewCard/type';

const CardForm = ({
  cardState,
  changeCardState,
}: {
  cardState: typeof INIT_CARD_STATE;
  changeCardState: changeCardStateType;
}) => {
  const [isShowModal, setVisibleModal] = useState(false);
  const { nextFieldId, inputRef, setNext } = useNextFieldRef();

  useEffect(() => {
    if (
      cardState[CARD_NUMBER].filter((_, i) => i < 2).every(
        (v) => `${v}`.length === INPUT_LENGTH[CARD_NUMBER]
      )
    ) {
      setVisibleModal(!isShowModal);
    }
  }, [cardState[CARD_NUMBER][0], cardState[CARD_NUMBER][1]]);

  const onChangeHandler = ({
    currentTarget: {
      value,
      dataset: { index, id },
    },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const fieldKey = id as keyof typeof INPUT_LENGTH;
    const prevState = cardState[fieldKey];

    if (INPUT_LENGTH[fieldKey] > 0 && value?.length > INPUT_LENGTH[fieldKey])
      return;

    changeCardState({
      [fieldKey]: Array.isArray(prevState)
        ? prevState.map((v, i) => (i === Number(index) ? value : v))
        : value,
    } as newStateProps);

    if (value?.length === INPUT_LENGTH[fieldKey]) {
      setNext(
        fieldKey,
        Array.isArray(prevState)
          ? prevState.findIndex((v, i) => i !== Number(index) && !v)
          : -1
      );
    }
  };

  return (
    <>
      <form>
        <InputContainer title='카드번호'>
          <InputBox>
            <Input
              type='number'
              data-index={0}
              data-id={CARD_NUMBER}
              value={cardState[CARD_NUMBER][0]}
              pattern='^[0-9]+$'
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${CARD_NUMBER}${0}` ? inputRef : null
              }
            />
            {cardState[CARD_NUMBER][0] && ' - '}
            <Input
              type='number'
              data-index={1}
              data-id={CARD_NUMBER}
              value={cardState[CARD_NUMBER][1]}
              pattern='^[0-9]+$'
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${CARD_NUMBER}${1}` ? inputRef : null
              }
            />
            {cardState[CARD_NUMBER][1] && ' - '}
            <Input
              type='password'
              data-index={2}
              data-id={CARD_NUMBER}
              value={cardState[CARD_NUMBER][2]}
              maxLength={INPUT_LENGTH[CARD_NUMBER]}
              pattern='^[0-9]+$'
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${CARD_NUMBER}${2}` ? inputRef : null
              }
            />
            {cardState[CARD_NUMBER][2] && ' - '}
            <Input
              type='password'
              data-index={3}
              data-id={CARD_NUMBER}
              value={cardState[CARD_NUMBER][3]}
              maxLength={INPUT_LENGTH[CARD_NUMBER]}
              pattern='^[0-9]+$'
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${CARD_NUMBER}${3}` ? inputRef : null
              }
            />
          </InputBox>
        </InputContainer>
        <InputContainer title='만료일'>
          <InputBox className='w-50'>
            <Input
              type='number'
              data-index={0}
              data-id={EXPIRY_DATE}
              value={cardState[EXPIRY_DATE][0]}
              pattern='^(0[1-9]|1[012])$'
              placeholder='MM'
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${EXPIRY_DATE}${0}` ? inputRef : null
              }
            />
            {cardState[EXPIRY_DATE]?.every((v) => v) && ' / '}
            <Input
              type='number'
              data-index={1}
              data-id={EXPIRY_DATE}
              value={cardState[EXPIRY_DATE][1]}
              pattern='^[0-9]+$'
              placeholder='YY'
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${EXPIRY_DATE}${1}` ? inputRef : null
              }
            />
          </InputBox>
        </InputContainer>
        <InputContainer
          title='카드 소유자 이름(선택)'
          titleAfterNode={`${cardState[OWNER].length}/${INPUT_LENGTH[OWNER]}`}
        >
          <Input
            type='text'
            data-index={0}
            data-id={OWNER}
            value={cardState[OWNER]}
            maxLength={INPUT_LENGTH[OWNER]}
            pattern='^[a-zA-Z]*'
            placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
            onChange={onChangeHandler}
            ref={nextFieldId.current === `${OWNER}${0}` ? inputRef : null}
          />
        </InputContainer>
        <InputContainer title='보안코드(CVC/CVV)'>
          <Input
            type='password'
            className='w-25'
            data-index={0}
            data-id={CVC}
            value={cardState[CVC]}
            maxLength={INPUT_LENGTH[CVC]}
            pattern='^[0-9]+'
            onChange={onChangeHandler}
            ref={nextFieldId.current === `${CVC}${0}` ? inputRef : null}
          />
        </InputContainer>
        <InputContainer title='카드 비밀번호'>
          <Input
            type='password'
            className='w-15'
            data-index={0}
            data-id={PASSWORD}
            value={cardState[PASSWORD][0]}
            maxLength={INPUT_LENGTH[PASSWORD]}
            pattern='^[0-9]+$'
            onChange={onChangeHandler}
            ref={nextFieldId.current === `${PASSWORD}${0}` ? inputRef : null}
          />{' '}
          <Input
            type='password'
            className='w-15'
            data-index={1}
            data-id={PASSWORD}
            value={cardState[PASSWORD][1]}
            maxLength={INPUT_LENGTH[PASSWORD]}
            pattern='^[0-9]+$'
            onChange={onChangeHandler}
            ref={nextFieldId.current === `${PASSWORD}${1}` ? inputRef : null}
          />{' '}
          <Input
            type='password'
            className='w-15'
            defaultValue='•'
            variant='empty'
            readOnly
          />{' '}
          <Input
            type='password'
            className='w-15'
            defaultValue='•'
            variant='empty'
            readOnly
          />
        </InputContainer>
      </form>
      {isShowModal && (
        <Modal
          changeCardState={changeCardState}
          onClose={() => setVisibleModal(!isShowModal)}
        />
      )}
    </>
  );
};

export default CardForm;
