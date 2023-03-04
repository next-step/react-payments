import styled from "styled-components";

function ToolTip() {
  return (
    <>
      <Img src="img/question.png" alt="" />
      <Bubble>cvc 3자만 넣어 주세요</Bubble>
    </>
  );
}

const Img = styled.img`
  vertical-align: middle;
  width: 25px;
  margin-left: 10px;
`;
const Bubble = styled.div`
  position: relative;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  background: pink;
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px;
  color: white;
  font-size: 13px;

  &:after {
    border: 10px solid transparent;
    border-right-color: pink;
    border-left: 0;
    margin-top: -10px;
    margin-left: -10px;
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

export default ToolTip;
