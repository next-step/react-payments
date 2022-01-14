import styled from "@emotion/styled";

const Item = styled.div`
  width: 210px;
  height: 130px;
  padding: 15px;
  border-radius: 5px;
  background: #d2d2d2;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  & + & {
    margin-top: 20px;
  }
`;

export default Item;
