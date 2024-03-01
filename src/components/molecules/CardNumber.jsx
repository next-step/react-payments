import Input from '../atoms/Input';
import Text from '../atoms/Text';

function CardNumber(props) {
  const { cardNumber } = props;

  return (
    <>
      <Text className="input-title" text="카드 번호" />
      <div className="input-box">
        <Input className="input-basic" type="text" value={cardNumber} />
        <Input className="input-basic" type="text" value={cardNumber} />
        <Input className="input-basic" type="password" value={cardNumber} />
        <Input className="input-basic" type="password" value={cardNumber} />
      </div>
    </>
  );
}

export default CardNumber;
