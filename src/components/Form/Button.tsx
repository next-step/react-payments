import styled from "styled-components";

function Footer() {
  return (
    <Box>
      <Text>다음</Text>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  text-align: right;
`;

const Text = styled.button`
  margin-right: 10px;
  background-color: white;
  border: none;
  font-size: 17px;
`;

export default Footer;
