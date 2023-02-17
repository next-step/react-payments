import { CardBox, Input, Modal } from './../components';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCard, useForm } from '../hooks';
import { Filter } from '../domain';
import { InputContainer } from '../container';
import SelectCard from '../components/SelectCard';

const { onlyNumber } = Filter;

export default function RegisterCard() {
  const [openCardPopup, setOpenCardPopup] = useState(false);
  const { cardState, setCardState } = useCard({
    cardCompany: '',
    cardNumber: '',
    userName: '',
    expiredDate: '',
    type: 'small',
  });

  const [cardNumber, setCardNumber] = useForm({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const [expired, setExpired] = useForm({
    month: '',
    year: '',
  });

  const [cardInfo, setCardInfo] = useForm({
    cardUserName: '',
    cvcNumber: '',
    cardPassword1: '',
    cardPassword2: '',
  });

  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const expiredMonthInput = useRef();
  const expiredYearInput = useRef();

  const cvcInput = useRef();
  const passwordInput = useRef();
  const passwordInput2 = useRef();

  const newCardNumber = useMemo(() => Object.values(cardNumber).map((item) => item.value), [cardNumber]);
  const newExpiredDate = useMemo(() => Object.values(expired).map((item) => item.value).join(''), [expired]);

  const toggleOpenCardPopup = () => {
    setOpenCardPopup(!openCardPopup);
  };

  useEffect(() => {
    setCardState({
      ...cardState,
      expiredDate: newExpiredDate,
      cardNumber: newCardNumber,
    });
  }, [cardNumber, expired]);

  return (
    <div className="app">
      <h2 className="page-title">&lt; 카드 추가</h2>
      <CardBox {...cardState} />
      <InputContainer title="카드 번호">
        <Input
          {...cardNumber.first}
          onChange={setCardNumber}
          maxLength={4}
          nextFocus={secondInput.current}
          filter={onlyNumber}
        />
        -
        <Input
          {...cardNumber.second}
          onChange={setCardNumber}
          ref={secondInput}
          maxLength={4}
          nextFocus={thirdInput.current}
          filter={onlyNumber}
        />
        -
        <Input
          {...cardNumber.third}
          onChange={setCardNumber}
          ref={thirdInput}
          type="password"
          maxLength={4}
          nextFocus={fourthInput.current}
          filter={onlyNumber}
        />
        -
        <Input
          {...cardNumber.fourth}
          onChange={setCardNumber}
          ref={fourthInput}
          type="passwordInput"
          maxLength={4}
          nextFocus={expiredMonthInput.current}
          filter={onlyNumber}
        />
      </InputContainer>
      <InputContainer title="만료일" className="w-50">
        <Input
          ref={expiredMonthInput}
          placeholder="MM"
          nextFocus={expiredYearInput.current}
          maxLength={2}
          {...expired.month}
          onChange={setExpired}
          filter={onlyNumber}
        />
        /
        <Input
          ref={expiredYearInput}
          placeholder="YY"
          maxLength={2}
          {...expired.year}
          onChange={setExpired}
          filter={onlyNumber}
        />
      </InputContainer>
      <InputContainer title="카드 소유자 이름(선택)">
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={30}
          {...cardInfo.cardUserName}
          onChange={setCardInfo}
        />
      </InputContainer>
      <InputContainer title="보안코드(CVC/CVV)" className="w-25">
        <Input
          type="password"
          maxLength={3}
          filter={onlyNumber}
          ref={cvcInput}
          nextFocus={passwordInput.current}
          {...cardInfo.cvcNumber}
          onChange={setCardInfo}
        />
      </InputContainer>
      <InputContainer title="카드 비밀번호" className="flex-start" notInputBox>
        <Input
          type="password"
          filter={onlyNumber}
          maxLength={1}
          className="w-15"
          ref={passwordInput}
          nextFocus={passwordInput2.current}
          {...cardInfo.cardPassword1}
          onChange={setCardInfo}
        />
        <Input
          ref={passwordInput2}
          type="password"
          filter={onlyNumber}
          maxLength={1}
          className="w-15"
          {...cardInfo.cardPassword2}
          onChange={setCardInfo}
        />
        <p className="flex-center w-15">•</p>
        <p className="flex-center w-15">•</p>
      </InputContainer>
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
      <Modal open={true}>
        <SelectCard/>
      </Modal>
    </div>
  );
}