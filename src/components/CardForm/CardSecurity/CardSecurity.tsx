import type { CardSecurityProps } from './CardSecurity.types';
import * as Styled from './CardSecurity.styles';
import useVirtualKeyBoard from 'hooks/useVirtualKeyBoard';

const CardSecurity = ({ fontColor, refs }: CardSecurityProps) => {
  const { showUI } = useVirtualKeyBoard(refs);
  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="보안코드 (CVC/CVV)" />
      <Styled.Container>
        <Styled.Box>
          <Styled.CardSecurityInput
            theme="primary"
            type="password"
            ref={(ref) => (refs.cvc = ref)}
            fontColor={fontColor}
            active={true}
            disabled={true}
          />
          <Styled.HelpButton />
          <Styled.KeyBoardButton onClick={() => showUI('cvc')} />
        </Styled.Box>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default CardSecurity;
