import styled from "@emotion/styled";
import { Item } from "../CardItem/CardItem";

const AddCardButton = () => {
  return (
    <Button as="button" aria-label="카드 추가">
      +
    </Button>
  );
};

const Button = styled(Item)`
  margin-top: 20px;
  font-size: 30px;
  color: #575757;
`;

export default AddCardButton;
