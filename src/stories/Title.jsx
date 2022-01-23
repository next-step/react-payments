import styled from "styled-components";

function Title({ children }) {
  return <PageTitle>{children}</PageTitle>;
}

export default Title;

const PageTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
`;
