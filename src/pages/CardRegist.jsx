import Card from '../components/Card';
import CardSelectPopup from '../components/CardSelectPopup';
import Button from '../components/Common/Button';
import InputContainer from '../components/InputContainer';
import { useEffect, useState } from 'react';
import { usePaymentContext, usePaymentAction } from '../Context';
import { CARD_COMPANY_LIST } from '../Constant';

const CardRegist = ({ onChange, onSubmit, onReset }) => {
  const [isShowPopup, setIsShowPopup] = useState(true);
  const { cardInfo } = usePaymentContext();
  const { setCardInfo } = usePaymentAction();

  useEffect(() => {
    onReset();
  }, []);

  const handlePopupClick = (evt) => {
    const clickedElement = evt.target.closest('.modal-item-container');
    if (clickedElement) {
      const { company, bgcolor } = clickedElement.dataset;
      setCardInfo({
        ...cardInfo,
        company,
        backgroundColor: bgcolor
      });
    }
    setIsShowPopup(false);
  };
  return (
    <main>
      <Card cardInfo={cardInfo} onClick={() => setIsShowPopup(true)} />
      <form onSubmit={onSubmit}>
        <InputContainer
          title="카드번호"
          inputList={[
            {
              id: 'number',
              type: 'text',
              maxLength: 19,
              minLength: 19,
              required: true
            }
          ]}
          cardInfo={cardInfo}
          onChange={onChange}
        />
        <InputContainer
          title="만료일"
          inputList={[
            {
              id: 'expiry',
              type: 'text',
              maxLength: 5,
              minLength: 5,
              required: true,
              placeholder: 'MM/YY',
              className: 'w-50'
            }
          ]}
          cardInfo={cardInfo}
          onChange={onChange}
        />
        <InputContainer
          title="카드 소유자 이름(선택)"
          inputList={[
            {
              id: 'owner',
              type: 'text',
              maxLength: 30,
              required: false,
              placeholder: '카드에 표시된 이름과 동일하게 입력하세요.'
            }
          ]}
          cardInfo={cardInfo}
          onChange={onChange}
        />
        <InputContainer
          title="보안코드(CVC/CVV)"
          inputList={[
            {
              id: 'cvc',
              type: 'password',
              maxLength: 3,
              minLength: 3,
              required: true,
              className: 'w-25'
            }
          ]}
          cardInfo={cardInfo}
          onChange={onChange}
        />
        <InputContainer
          title="카드 비밀번호"
          inputList={[
            {
              id: 'password1',
              type: 'password',
              maxLength: 1,
              required: true,
              className: 'w-15'
            },
            {
              id: 'password2',
              type: 'password',
              maxLength: 1,
              required: true,
              className: 'w-15'
            }
          ]}
          cardInfo={cardInfo}
          onChange={onChange}
        />
        <Button className="button-box button" children="다음"></Button>
      </form>
      {isShowPopup && (
        <CardSelectPopup cardCompanyList={CARD_COMPANY_LIST} onClick={handlePopupClick} />
      )}
    </main>
  );
};

export default CardRegist;
