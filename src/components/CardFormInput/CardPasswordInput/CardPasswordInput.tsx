import type { CardPasswordInputProps } from './CardPasswordInput.types';
import * as Styled from './CardPasswordInput.styles';

const CardPasswordInput = ({ refs, fontColor, onChange, isValidStart, isValidEnd }: CardPasswordInputProps) => {
  const isValid = isValidStart && isValidEnd;

  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="카드 비밀번호" />
      <Styled.Container>
        <Styled.CardPasswordInput
          theme="primary"
          type="text"
          active={true}
          ref={(el) => (refs.password.start.ref = el)}
          onChange={onChange}
          fontColor={fontColor}
          error={!isValidStart}
        />
        <Styled.CardPasswordInput
          theme="primary"
          type="text"
          active={true}
          ref={(el) => (refs.password.end.ref = el)}
          onChange={onChange}
          fontColor={fontColor}
          error={!isValidEnd}
        />
        <Styled.CardPasswordInput theme="primary" type="text" active={true} />
        <Styled.CardPasswordInput theme="primary" type="text" active={true} />
      </Styled.Container>
      {!isValid && <Styled.ErrorText fontSize="xs" weight="bold" label="숫자 1자리씩 입력해주세요" fontColor="red" />}
    </Styled.Layout>
  );
};

export default CardPasswordInput;
