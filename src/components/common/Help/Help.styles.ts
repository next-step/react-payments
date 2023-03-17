import styled from 'styled-components';
import { IconButton } from 'components/common/IconButton';
export const HelpButton = styled(IconButton)``;
export const ToolTip = styled.span`
  display: block;
  position: absolute;
  width: 112px;
  height: 40px;
  background: #484848;
  color: white;
  border-radius: 5px;
  padding: 12px 12.8px;
  left: -10px;
  top: -50px;
  font-weight: bold;
  ::after {
    position: absolute;
    border-top: 13px solid #484848;
    border-left: 6px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    top: 40px;
    left: 30px;
  }
`;

export const Layout = styled.div`
  position: relative;
`;
