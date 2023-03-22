import useToggle from 'hooks/useToggle';
import * as Styled from './KeyBoardIcon.styles';
import type { KeyBoardIconProps } from './KeyBoardIcon.types';
const KeyBoardIcon = ({ onClick }: KeyBoardIconProps) => {
  const { isOpen, setIsOpen } = useToggle();

  return (
    <Styled.Layout>
      {isOpen && <Styled.ToolTip>가상 키보드</Styled.ToolTip>}
      <Styled.KeyBoardButton
        name="keyboard"
        size="2x"
        color="black"
        onClick={onClick}
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
    </Styled.Layout>
  );
};

export default KeyBoardIcon;
