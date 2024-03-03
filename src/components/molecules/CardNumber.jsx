import Input from '../atoms/Input';
import Text from '../atoms/Text';

const numberRegExp = /[^\d]/g;

function CardNumber(props) {
  const { cardNumber, onData } = props;

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newValue = value.replace(numberRegExp, '');
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = newValue;
    event.target.value = newValue;
    onData('cardNumber', newCardNumber);
  };

  return (
    <>
      <Text className="input-title" text="카드 번호" />
      <div className="input-box">
        <Input
          className="input-basic"
          type="text"
          onChange={(e) => handleChange(e, 0)}
          maxLength={4}
        />
        <Input
          className="input-basic"
          type="text"
          onChange={(e) => handleChange(e, 1)}
          maxLength={4}
        />
        <Input
          className="input-basic"
          type="password"
          onChange={(e) => handleChange(e, 2)}
          maxLength={4}
        />
        <Input
          className="input-basic"
          type="password"
          onChange={(e) => handleChange(e, 3)}
          maxLength={4}
        />
      </div>
    </>
  );
}

export default CardNumber;
