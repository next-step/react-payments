import {
  useState,
  useEffect,
  useContext,
  FormEventHandler,
  Fragment,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  INIT_CARD_STATE,
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
    const fieldKey = id as keyof Omit<typeof INPUT_INFO, 'nickname' | 'owner'>;
    const prevState = cardState[fieldKey];

    if (isValueOverMaximumLength(value, fieldKey)) return;

    const newState = {
      [fieldKey]: Array.isArray(prevState)
        ? prevState.map((v, i) => (i === Number(index) ? value : v))
        : value,
    } as unknown as newStateProps;

    if (INPUT_INFO[fieldKey].require) {
      setInputValidationStates({
        value: value,
        fieldKey,
        index: Number(index),
      });
    }

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
      const cardId = Number(cardList[0]?.id || 0) + 1;

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
            {INIT_CARD_STATE[CARD_NUMBER].map((_, i, arr) => (
              <Fragment key={`${CARD_NUMBER}${i}`}>
                <Input
                  type={i < 2 ? 'number' : 'password'}
                  data-index={i}
                  data-id={CARD_NUMBER}
                  value={cardState[CARD_NUMBER][i]}
                  pattern={INPUT_INFO[CARD_NUMBER].pattern}
                  onChange={onChangeHandler}
                  ref={
                    nextFieldId.current === `${CARD_NUMBER}${i}`
                      ? inputRef
                      : null
                  }
                />
                {i !== arr.length - 1 && cardState[CARD_NUMBER][i] && ' - '}
              </Fragment>
            ))}
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
            {INIT_CARD_STATE[EXPIRY_DATE].map((_, i, arr) => (
              <Fragment key={`${EXPIRY_DATE}${i}`}>
                <Input
                  type='number'
                  data-index={i}
                  data-id={EXPIRY_DATE}
                  value={cardState[EXPIRY_DATE][i]}
                  pattern={INPUT_INFO[EXPIRY_DATE].pattern[i]}
                  placeholder={i === 0 ? 'MM' : 'YY'}
                  onChange={onChangeHandler}
                  ref={
                    nextFieldId.current === `${EXPIRY_DATE}${i}`
                      ? inputRef
                      : null
                  }
                />
                {i !== arr.length - 1 &&
                  cardState[EXPIRY_DATE]?.every((v) => v) &&
                  ' / '}
              </Fragment>
            ))}
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
            {INIT_CARD_STATE[PASSWORD].map((_, i) => (
              <Fragment key={`${PASSWORD}${i}`}>
                <Input
                  type='password'
                  className='w-15'
                  data-index={i}
                  data-id={PASSWORD}
                  value={cardState[PASSWORD][i]}
                  maxLength={INPUT_LENGTH[PASSWORD]}
                  pattern={INPUT_INFO[PASSWORD].pattern}
                  onChange={onChangeHandler}
                  ref={
                    nextFieldId.current === `${PASSWORD}${i}` ? inputRef : null
                  }
                />{' '}
              </Fragment>
            ))}
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
