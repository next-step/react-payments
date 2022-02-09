import styled from "@emotion/styled";

import Item from "../style/card";

const AddCardButton = ({ onClick }) => {
  return (
    <Button as="button" aria-label="카드 추가" onClick={onClick}>
      +
    </Button>
  );
};

const Button = styled(Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 30px;
  color: #575757;
`;

export default AddCardButton;
