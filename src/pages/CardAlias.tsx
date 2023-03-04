import Card from 'src/components/Card';
import TextButton from 'src/components/TextButton/TextButton';
import useCardAlias from 'src/hooks/useCardAlias';

const CardAlias = () => {
  const { cardInfo, aliasInputRef, onClickConfirmBtn } = useCardAlias();
  const { creditNumber, customerName, expirationDate, bankTitle, bgColor } =
    cardInfo;
  return (
    <div className="alias-page">
      <div className="alias-page-title">카드 등록이 완료되었습니다.</div>
      <Card
        title={bankTitle}
        bgColor={bgColor}
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
