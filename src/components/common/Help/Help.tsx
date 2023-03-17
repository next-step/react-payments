import useHelpIcon from 'hooks/useHelpIcon';
import * as Styled from './Help.styles';

const Help = () => {
  const { isOpen, setIsOpen } = useHelpIcon();

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
export default Help;
