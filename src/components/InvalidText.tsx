import styled from "styled-components";

export const InvalidText = ({ children }: InvalidTextProps) => {
  return <InvalidBox>{children}</InvalidBox>;
};

type InvalidTextProps = {
  children: string;
};

const InvalidBox = styled.span`
  color: red;
  font-size: 10px;
`;
