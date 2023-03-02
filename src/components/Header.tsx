import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ROUTE } from "../constants/route";

function Header() {
  const history = useHistory();

  const onClick = () => {
    history.push(ROUTE.LIST);
  };
  return <H2 onClick={onClick}>&lt; 카드 추가</H2>;
}

const H2 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
`;

export default Header;
