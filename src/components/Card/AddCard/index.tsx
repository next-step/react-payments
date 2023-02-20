import styled from "styled-components";
import { ReactEventHandler } from "react";

type AddCardProps = {
  onClick: ReactEventHandler<HTMLDivElement>;
};

export const AddCard = ({ onClick }: AddCardProps) => {
  return <Layout onClick={onClick}>+</Layout>;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  background: #e5e5e5;
  border-radius: 5px;
  width: 208px;
  height: 130px;
  margin: 20px;

  cursor: pointer;
`;
export default AddCard;
