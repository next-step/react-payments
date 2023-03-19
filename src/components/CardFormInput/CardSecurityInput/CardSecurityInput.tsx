import { Help } from 'components/common/Help';
import type { CardPasswordInputProps } from './CardSecurityInput.types';
import * as Styled from './CardSecurityInput.styles';

const CardSecurityInput = ({ fontColor, onChange, refs, isValid }: CardPasswordInputProps) => {
  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="보안코드 (CVC/CVV)" />
      <Styled.Container>
        <Styled.CardSecurityInput
          theme="primary"
          type="text"
          ref={(ref) => (refs.cvc = ref)}
          onChange={onChange}
          fontColor={fontColor}
          active={true}
          error={!isValid}
        />
        <Help />
      </Styled.Container>
      {!isValid && <Styled.ErrorText fontSize="xs" weight="bold" label="숫자 3자리 입력해주세요" fontColor="red" />}
    </Styled.Layout>
  );
};

export default CardSecurityInput;
