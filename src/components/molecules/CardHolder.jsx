import { useState } from 'react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import { NAME_REG_EXP } from '../../constants/regularExpressions';
import { CARD_HOLDER_NAME_MAX_LENGTH } from '../../constants/constraints';
import { LABEL_CARD_HOLDER } from '../../constants/labels';
import { MSG_INPUT_CARD_HOLDER } from '../../constants/messages';

function CardHolder(props) {
  const { onData } = props;
  const [newCardHolder, setNewCardHolder] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    const inputCardHolder = value.replace(NAME_REG_EXP, '');
    setNewCardHolder(inputCardHolder);
    onData('user', inputCardHolder);
  };

  return (
    <>
      <Text
        className="input-title"
        text={`${LABEL_CARD_HOLDER} [${newCardHolder.length}/${CARD_HOLDER_NAME_MAX_LENGTH}]`}
      />
      <Input
        className="input-basic"
        type="type"
        value={newCardHolder}
        placeholder={MSG_INPUT_CARD_HOLDER}
        onChange={handleChange}
        maxLength={CARD_HOLDER_NAME_MAX_LENGTH}
      />
    </>
  );
}

export default CardHolder;
