import Card from 'src/components/Card';
import TextButton from 'src/components/TextButton/TextButton';
import useCardAlias from 'src/hooks/useCardAlias';

const CardAlias = () => {
  const { cardInfo, aliasInputRef, onClickConfirmBtn, onClickDeleteBtn } =
    useCardAlias();
  const {
    creditNumber,
    customerName,
    expirationDate,
    bankTitle,
    bgColor,
    alias,
  } = cardInfo;
  return (
    <div className="alias-page">
      <div className="alias-page-title">
        {cardInfo.id
          ? '카드 별칭을 수정합니다.'
          : '카드 등록이 완료되었습니다.'}
      </div>
      <Card
        title={bankTitle}
        bgColor={bgColor}
        creditNumber={creditNumber}
        customerName={customerName}
        expirationDate={expirationDate}
      />
      <input
        defaultValue={alias}
        className="alias-input"
        placeholder="카드 별칭 (선택)"
        maxLength={10}
        ref={aliasInputRef}
      />
      {cardInfo.id && (
        <TextButton
          style={{ marginRight: '3rem', color: '#E24141' }}
          onClick={onClickDeleteBtn}
        >
          삭제
        </TextButton>
      )}
      <TextButton onClick={onClickConfirmBtn}>확인</TextButton>
    </div>
  );
};

export default CardAlias;
