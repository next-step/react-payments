import styled from "@emotion/styled";

const InputGroup = ({ separator, children }) => {
  return (
    <Wrap>
      {separator && <em>{separator}</em>}
      {children}
    </Wrap>
  );
};

const Wrap = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  em {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

export default InputGroup;
