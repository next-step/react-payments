import { useEffect, useState } from 'react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import { LABEL_CARD_NUMBER } from '../../constants/labels';
import { NUMBER_REG_EXP } from '../../constants/regularExpressions';
import { CARD_NUMBER_PART_DIGIT } from '../../constants/constraints';

function CardNumber(props) {
  const { cardNumber, onData } = props;
  const [newCardNumber, setNewCardNumber] = useState(cardNumber);

  useEffect(() => {
    onData('cardNumber', newCardNumber);
  }, [newCardNumber]);

  const handleChange = (event, index) => {
    const { value } = event.target;
    setNewCardNumber(() => {
      const inputCardNumber = [...cardNumber];
      inputCardNumber[index] = value.replace(NUMBER_REG_EXP, '');
      return inputCardNumber;
    });
  };

  return (
    <>
      <Text className="input-title" text={LABEL_CARD_NUMBER} />
      <div className="input-box">
        {Array.from({ length: 4 }, (_, index) => (
          <Input
            key={index}
            className="input-basic"
            type="text"
            value={newCardNumber[index]}
            onChange={(e) => handleChange(e, index)}
            maxLength={CARD_NUMBER_PART_DIGIT}
          />
        ))}
      </div>
    </>
  );
}

export default CardNumber;
