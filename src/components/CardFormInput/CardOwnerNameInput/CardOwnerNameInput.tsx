import type { CardOwnerNameInputProps } from './CardOwnerNameInput.types';
import * as Styled from './CardOwnerNameInput.styles';

const CardOwnerNameInput = ({ onChange, fontColor, refs, length }: CardOwnerNameInputProps) => {
  return (
    <Styled.Layout>
      <Styled.Container>
        <Styled.OwnerName fontSize="xs" weight="bold" label="카드 소유자 이름(선택)" />
        <Styled.OwnerNameLength fontSize="s" weight="normal" label={`${length}/10`} />
      </Styled.Container>
      <Styled.CardOwnerNameInput
        type="text"
        theme="primary"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ref={(ref) => (refs.ownerName = ref)}
        onChange={onChange}
        fontColor={fontColor}
        active={true}
      />
    </Styled.Layout>
  );
};

export default CardOwnerNameInput;
