import type { CardNumberInputProps } from './CardNumberInput.types';
import * as Styled from './CardNumberInput.styles';

const CardNumberInput = ({ onChange, isValid, fontColor, refs }: CardNumberInputProps) => {
  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="카드 번호" />
      <Styled.CardNumberInput
        ref={(ref) => (refs.cardNumbers = ref)}
        type="text"
        theme="primary"
        onChange={onChange}
        fontColor={fontColor}
        active={true}
        error={!isValid}
      />
      {!isValid && (
        <Styled.CardNumberText fontSize="xs" weight="bold" label="카드 번호는 12자리여야 합니다." fontColor="red" />
      )}
    </Styled.Layout>
  );
};

export default CardNumberInput;
