import useToggle from 'hooks/useToggle';
import * as Styled from './HelpIcon.styles';

const HelpIcon = () => {
  const { isOpen, setIsOpen } = useToggle();

  return (
    <Styled.Layout>
      {isOpen && <Styled.ToolTip>카드 뒤 3자리</Styled.ToolTip>}
      <Styled.HelpButton
        name="help"
        size="2x"
        color="black"
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
    </Styled.Layout>
  );
};
export default HelpIcon;
