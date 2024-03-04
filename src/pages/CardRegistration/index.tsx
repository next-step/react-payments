import { useReducer } from 'react';
import ConditionalMark from '../../components/ConditionalMark';
import InputContainer from '../../components/InputContainer';
import Mark from '../../components/Mark';
import { MARK } from '../../constant';
import Card from './components/Card';
import { cardReducer, initialCard } from './reducer';

interface CardRegistration {
  onClickBack: () => void;
  onClickNext: () => void;
}

export default function CardRegistration({ onClickBack, onClickNext }: CardRegistration) {
  const [card, cardDispatch] = useReducer(cardReducer, initialCard);

  return (
    <>
      <div className="app">
        <div className="flex-align-center g-16">
          <div onClick={onClickBack}>
            <span>{'<'}</span>
          </div>
          <h2 className="page-title">카드 추가</h2>
        </div>
        <Card ownerName={card.ownerName} expiration={{ month: card.expiration.month, year: card.expiration.year }} />
        <InputContainer inputTitle={'카드 번호'}>
          <div className="input-box">
            <input
              className="input-basic"
              type="text"
              maxLength={4}
              value={card.cardNumber.first}
              onChange={(e) => cardDispatch({ type: 'cardNumberFirst', param: e.target.value })}
            />
            <ConditionalMark isShow={card.cardNumber.first.length === 4} mark={MARK.dash} />
            <input
              className="input-basic"
              type="text"
              maxLength={4}
              value={card.cardNumber.second}
              onChange={(e) => cardDispatch({ type: 'cardNumberSecond', param: e.target.value })}
            />
            <ConditionalMark isShow={card.cardNumber.second.length === 4} mark={MARK.dash} />
            <input
              className="input-basic"
              type="password"
              maxLength={4}
              value={card.cardNumber.third}
              onChange={(e) => cardDispatch({ type: 'cardNumberThird', param: e.target.value })}
            />
            <ConditionalMark isShow={card.cardNumber.third.length === 4} mark={MARK.dash} />
            <input
              className="input-basic"
              type="password"
              maxLength={4}
              value={card.cardNumber.fourth}
              onChange={(e) => cardDispatch({ type: 'cardNumberFourth', param: e.target.value })}
            />
          </div>
        </InputContainer>
        <InputContainer inputTitle={'만료일'}>
          <div className="input-box w-50">
            <input
              className="input-basic"
              type="text"
              placeholder="MM"
              maxLength={2}
              value={card.expiration.month}
              onChange={(e) => cardDispatch({ type: 'expirationMonth', param: e.target.value })}
            />
            <Mark mark={MARK.slash} />
            <input
              className="input-basic"
              type="text"
              placeholder="YY"
              maxLength={2}
              value={card.expiration.year}
              onChange={(e) => cardDispatch({ type: 'expirationYear', param: e.target.value })}
            />
          </div>
        </InputContainer>
        <InputContainer
          inputTitle={
            <div className="flex-justify-spaceBetween">
              <span className="input-title">카드 소유자 이름(선택)</span>
              <span className="input-title">{`${card.ownerName.length}${MARK.slash}${CONST.ownerNameMaxLength}`}</span>
            </div>
          }
        >
          <input
            type="text"
            className="input-basic text-left pl-16"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={CONST.ownerNameMaxLength}
            value={card.ownerName}
            onChange={(e) => cardDispatch({ type: 'ownerName', param: e.target.value })}
          />
        </InputContainer>
        <InputContainer inputTitle={'보안코드(CVC/CVV)'}>
          <input
            className="input-basic w-25"
            type="password"
            maxLength={3}
            value={card.securityCode}
            onChange={(e) => cardDispatch({ type: 'securityCode', param: e.target.value })}
          />
        </InputContainer>
        <InputContainer inputTitle={'카드 비밀번호'}>
          <>
            <input
              className="input-basic w-15"
              type="password"
              maxLength={1}
              value={card.cardPassword.first}
              onChange={(e) => cardDispatch({ type: 'cardPasswordFirst', param: e.target.value })}
            />
            <input
              className="input-basic w-15"
              type="password"
              maxLength={1}
              value={card.cardPassword.second}
              onChange={(e) => cardDispatch({ type: 'cardPasswordSecond', param: e.target.value })}
            />
            <input className="input-basic w-15" type="password" maxLength={1} value={0} />
            <input className="input-basic w-15" type="password" maxLength={1} value={0} />
          </>
        </InputContainer>
        <div className="button-box" onClick={onClickNext}>
          <span className="button-text">다음</span>
        </div>
      </div>
    </>
  );
}

const CONST = {
  ownerNameMaxLength: 30,
};
