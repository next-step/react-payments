import type { CardPasswordInputProps } from './CardSecurity.types';
import * as Styled from './CardSecurity.styles';

const CardSecurity = ({ fontColor, onChange, refs, isValid }: CardPasswordInputProps) => {
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
        <div>
          <Styled.HelpButton />
        </div>
      </Styled.Container>
      {!isValid && <Styled.ErrorText fontSize="xs" weight="bold" label="숫자 3자리 입력해주세요" fontColor="red" />}
    </Styled.Layout>
  );
};

export default CardSecurity;
