import CardBox from '../CardBox';
import Card from '../Card';
import Button from '../card-add/ClickableLink';

export default function CompletedCard() {
  const cardNumber = {
    firstNumber: '1111',
    secondNumber: '1111',
    thirdNumber: '1111',
    fourthNumber: '1111',
  };

  const expirationDate = {
    month: '12',
    year: '23',
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h1 className="page-title mb-10">카드등록이 완료되었습니다.</h1>
        </div>
        <CardBox>
          <Card
            variant="big"
            cardNumber={cardNumber}
            ownerName="YUJO"
            expirationDate={expirationDate}
          />
        </CardBox>
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
          />
        </div>
        <Button className="mt-55" location="/" text="다음" />
      </div>
    </div>
  );
}
