import { CARD_NUMBER_LABEL } from "../constants";

import useCardNumberFieldsRef from "./hooks/useCardNumberFieldsRef";

const AddCardForm = ({ fields, onChange }) => {
  const { firstField, secondField, thirdField, fourthField } = fields;

  const { firstInput, secondInput, thirdInput, fourthInput } =
    useCardNumberFieldsRef({
      fields,
    });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    onChange({ name, value });
  };

  return (
    <form>
      <label htmlFor="card-number">카드 번호</label>
      <p>
        <input
          aria-label={CARD_NUMBER_LABEL.first}
          ref={firstInput}
          id="card-number"
          type="number"
          name="firstField"
          value={firstField}
          onChange={handleChange}
          autoFocus
        />
        <input
          aria-label={CARD_NUMBER_LABEL.second}
          ref={secondInput}
          type="number"
          name="secondField"
          value={secondField}
          onChange={handleChange}
        />
        <input
          aria-label={CARD_NUMBER_LABEL.third}
          ref={thirdInput}
          type="number"
          name="thirdField"
          value={thirdField}
          onChange={handleChange}
        />
        <input
          aria-label={CARD_NUMBER_LABEL.fourth}
          ref={fourthInput}
          type="number"
          name="fourthField"
          value={fourthField}
          onChange={handleChange}
        />
      </p>
    </form>
  );
};
export default AddCardForm;
