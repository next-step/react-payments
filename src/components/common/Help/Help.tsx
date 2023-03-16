import * as Styled from './Help.styles';

// import type { HelpProps } from './Help.types';

const Help = () => {
  return (
    <Styled.Layout>
      <Styled.ToolTip>CVC 번호 3자리</Styled.ToolTip>
      <Styled.HelpButton name="help" size="2x" color="black" />
    </Styled.Layout>
  );
};
export default Help;
