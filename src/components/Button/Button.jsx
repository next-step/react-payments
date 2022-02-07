import styled from "@emotion/styled";

export default function Button({ children, onClick }) {
  return <Wrap onClick={onClick}>{children}</Wrap>;
}

const Wrap = styled.button`
  padding: 10px;
  color: #04c09e;
`;
