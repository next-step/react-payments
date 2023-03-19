import useToolTip from 'hooks/useTooltip';
import * as Styled from './KeyBoardIcon.styles';

const KeyBoardIcon = () => {
  const { isOpen, setIsOpen } = useToolTip();

  return (
    <Styled.Layout>
      {isOpen && <Styled.ToolTip>가상 키보드</Styled.ToolTip>}
      <Styled.KeyBoardButton
        name="keyboard"
        size="2x"
        color="black"
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
    </Styled.Layout>
  );
};

export default KeyBoardIcon;
