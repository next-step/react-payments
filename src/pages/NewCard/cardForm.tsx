import { useState, useEffect, useContext, FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CARD_NUMBER,
  EXPIRY_DATE,
  OWNER,
  CVC,
  PASSWORD,
  INPUT_LENGTH,
  INPUT_INFO,
} from '@/constants/index';
import { CardContext } from '@/context/cardContext';
import Input from '@/components/Forms/Input/index';
import InputBox from '@/components/Forms/InputBox';
import InputContainer from '@/components/Forms/InputContainer';
import Modal from '@/components/Modal';
import PageBottom, { PageBottomText } from '@components/PageBottom/index';
import Button from '@components/Button';
import useNextFieldRef from '@/hooks/useNextFieldRef';
import { newStateProps } from '@/pages/NewCard/type';
import { isValueOverMaximumLength } from '@/helper/isValid';
import useInputValidationStates from '@/hooks/useInputValidationStates';

const CardForm = () => {
  const { cardState, setCardState, cardList, setCardList } =
    useContext(CardContext);
  const [isShowModal, setVisibleModal] = useState(false);
  const { nextFieldId, inputRef, setNext } = useNextFieldRef();
  const {
    validationStates,
    setInputValidationStates,
    getErrorMessage,
    isValidField,
    isAllValid,
    hasInvalidState,
  } = useInputValidationStates();
  const navigate = useNavigate();
  const goDonePage = (id: number) => navigate(`../done/${id}`);
  const cardNumberFstScd = cardState[CARD_NUMBER].filter((_, i) => i < 2);

  useEffect(() => {
    if (
      cardNumberFstScd.every((v) => `${v}`.length === INPUT_LENGTH[CARD_NUMBER])
    ) {
      nextFieldId.current = null;
      setVisibleModal(!isShowModal);
    }
  }, cardNumberFstScd);

  const onCloseModal = () => {
    setVisibleModal(!isShowModal);
    setNext(
      CARD_NUMBER,
      Array.isArray(cardState[CARD_NUMBER])
        ? cardState[CARD_NUMBER].findIndex((v) => !v)
        : -1
    );
  };

  const onChangeHandler = ({
    currentTarget: {
      value,
      dataset: { index, id },
    },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const fieldKey = id as keyof Omit<typeof INPUT_INFO, 'nickname'>;
    const prevState = cardState[fieldKey];

    if (isValueOverMaximumLength(value, fieldKey)) return;

    const newState = {
      [fieldKey]: Array.isArray(prevState)
        ? prevState.map((v, i) => (i === Number(index) ? value : v))
        : value,
    } as unknown as newStateProps;

    setInputValidationStates({
      value: value,
      fieldKey,
      index: Number(index),
    });

    setCardState({ ...cardState, ...newState });

    if (fieldKey === CARD_NUMBER && Number(index) === 1) return;

    if (
      INPUT_INFO[fieldKey].require &&
      isValidField({
        value: value,
        fieldKey,
        index: Number(index),
      })
    ) {
      setNext(
        fieldKey,
        Array.isArray(prevState)
          ? prevState.findIndex((v, i) => i !== Number(index) && !v)
          : -1
      );
    }
  };

  const submitCardStates: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isAllValid()) {
      const cardId = Number(cardList[cardList.length - 1]?.id || 0) + 1;

      setCardList([
        {
          ...cardState,
          id: cardId,
        },
        ...cardList,
      ]);

      goDonePage(cardId);
      return;
    }
  };

  return (
    <>
      <form onSubmit={submitCardStates}>
        <InputContainer
          isError={validationStates[CARD_NUMBER].some(hasInvalidState)}
          title='카드번호'
        >
          <InputBox>
            <Input
              type='number'
              data-index={0}
              data-id={CARD_NUMBER}
              value={cardState[CARD_NUMBER][0]}
              pattern={INPUT_INFO[CARD_NUMBER].pattern}
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
              pattern={INPUT_INFO[CARD_NUMBER].pattern}
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
              pattern={INPUT_INFO[CARD_NUMBER].pattern}
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
              pattern={INPUT_INFO[CARD_NUMBER].pattern}
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${CARD_NUMBER}${3}` ? inputRef : null
              }
            />
          </InputBox>
          <div className='error-message'>
            {getErrorMessage({
              fieldKey: CARD_NUMBER,
              index: validationStates[CARD_NUMBER].findIndex(hasInvalidState),
            })}
          </div>
        </InputContainer>
        <InputContainer
          isError={validationStates[EXPIRY_DATE].some(hasInvalidState)}
          title='만료일'
        >
          <InputBox className='w-50'>
            <Input
              type='number'
              data-index={0}
              data-id={EXPIRY_DATE}
              value={cardState[EXPIRY_DATE][0]}
              pattern={INPUT_INFO[EXPIRY_DATE].pattern[0]}
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
              pattern={INPUT_INFO[EXPIRY_DATE].pattern[1]}
              placeholder='YY'
              onChange={onChangeHandler}
              ref={
                nextFieldId.current === `${EXPIRY_DATE}${1}` ? inputRef : null
              }
            />
          </InputBox>
          <div className='error-message'>
            {getErrorMessage({
              fieldKey: EXPIRY_DATE,
              index: validationStates[EXPIRY_DATE].findIndex(hasInvalidState),
            })}
          </div>
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
            placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
            onChange={onChangeHandler}
            ref={nextFieldId.current === `${OWNER}${0}` ? inputRef : null}
          />
          <div className='error-message'></div>
        </InputContainer>
        <InputContainer
          isError={validationStates[CVC].some(hasInvalidState)}
          title='보안코드(CVC/CVV)'
        >
          <Input
            type='password'
            className='w-25'
            data-index={0}
            data-id={CVC}
            value={cardState[CVC]}
            maxLength={INPUT_LENGTH[CVC]}
            pattern={INPUT_INFO[CVC].pattern}
            onChange={onChangeHandler}
            ref={nextFieldId.current === `${CVC}${0}` ? inputRef : null}
          />
          <div className='error-message'>
            {getErrorMessage({
              fieldKey: CVC,
              index: validationStates[CVC].findIndex(hasInvalidState),
            })}
          </div>
        </InputContainer>
        <InputContainer
          isError={validationStates[PASSWORD].some(hasInvalidState)}
          title='카드 비밀번호'
        >
          <>
            <Input
              type='password'
              className='w-15'
              data-index={0}
              data-id={PASSWORD}
              value={cardState[PASSWORD][0]}
              maxLength={INPUT_LENGTH[PASSWORD]}
              pattern={INPUT_INFO[PASSWORD].pattern}
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
              pattern={INPUT_INFO[PASSWORD].pattern}
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
          </>
          <div className='error-message'>
            {getErrorMessage({
              fieldKey: PASSWORD,
              index: validationStates[PASSWORD].findIndex(hasInvalidState),
            })}
          </div>
        </InputContainer>

        <PageBottom className='mt-auto'>
          <Button type='submit' disabled={!isAllValid()}>
            <PageBottomText>다음</PageBottomText>
          </Button>
        </PageBottom>
      </form>
      {isShowModal && <Modal onClose={onCloseModal} />}
    </>
  );
};

export default CardForm;
