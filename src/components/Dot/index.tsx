import Text from "components/Text";
import styled from "styled-components";

const Dot = () => {
  return (
    <Layout>
      <Circle />
      <Text fontSize="s" weight="bold">
        클린 카드
      </Text>
    </Layout>
  );
};
export default Dot;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: #94dacd;
`;
