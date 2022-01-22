import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const GoBackLink = styled(Link)`
  margin-right: 18px;
`;

const GoBackIcon = styled.div`
  width: 12px;
  height: 12px;
  border-left: 3px solid #525252;
  border-bottom: 3px solid #525252;
  transform: rotate(45deg);
`;

const Title = styled.h1`
  font-size: 16px;
  color: #383838;
`;

export default {
  Header,
  GoBackLink,
  GoBackIcon,
  Title,
};
