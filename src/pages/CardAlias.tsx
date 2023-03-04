import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'src/components/Card';
import TextButton from 'src/components/TextButton/TextButton';
import { NewCardContext } from 'src/contexts/NewCardContext';

const CardAlias = () => {
  const { cardInfo } = useContext(NewCardContext);
  const { creditNumber, customerName, expirationDate } = cardInfo;
  const aliasInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onClickConfirmBtn = () => {
    if (aliasInputRef.current) {
      const { value } = aliasInputRef.current;
      if (!value) {
        // TODO : card사 이름이 대신 채워짐
      }
    }
    navigate('/', { replace: true });
  };
  return (
    <div className="alias-page">
      <div className="alias-page-title">카드 등록이 완료되었습니다.</div>
      <Card
        title="title"
        bgColor="skyblue"
        creditNumber={creditNumber}
        customerName={customerName}
        expirationDate={expirationDate}
      />
      <input
        className="alias-input"
        placeholder="카드 별칭 (선택)"
        maxLength={10}
        ref={aliasInputRef}
      />
      <TextButton onClick={onClickConfirmBtn}>확인</TextButton>
    </div>
  );
};

export default CardAlias;
