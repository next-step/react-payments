import styled from "styled-components";

function Next({ children }) {
  return <NextText>{children}</NextText>;
}

export default Next;

const NextText = styled.span`
  margin-right: 10px;
`;
