import styled from 'styled-components';
import { Input } from 'components/common/Input';

const VirtualKeyBoard = () => {
  return (
    <Layout>
      <h1>비밀번호 입력</h1>
      <InputContainer>
        <Input type="password" theme="primary" active={true} />
        <Input type="password" theme="primary" active={true} />
        <Input type="password" theme="primary" active={true} />
        <Input type="password" theme="primary" active={true} />
      </InputContainer>
      <Container>
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>0</Key>
        <Key>clear</Key>
        <Key>x</Key>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 15px 15px;
  display: none;
  background: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  z-index: 9999;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 125px);
  grid-template-rows: repeat(3, 125px);
`;
const Key = styled.button`
  background-color: green;
  color: white;
  border: none;
  text-align: center;
  font-size: 24px;
  padding: 25px 0px;
  cursor: pointer;
  :hover {
    border: 1px solid #eeeeee;
  }
`;
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  padding: 55px;
`;

export default VirtualKeyBoard;
