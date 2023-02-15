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

const Text = styled.span`
  margin-right: 10px;
`;

export default Footer;
