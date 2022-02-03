import styled from "@emotion/styled";

import Item from "../style/card";

const Card = ({ data, className }) => {
  const {
    name,
    numbers: [firstField, secondField],
    owner,
    expiryDate,
  } = data;

  return (
    <Item className={className}>
      <Top>{name}</Top>
      <Middle>
        <span>{firstField}</span>
        <span>{secondField}</span>
        <span>●●●●</span>
        <span>●●●●</span>
      </Middle>
      <Bottom>
        <span>{owner}</span>
        <span>{expiryDate}</span>
      </Bottom>
    </Item>
  );
};

const Top = styled.p`
  font-size: 10px;
  &:after {
    display: block;
    margin: 20px 0 14px;
    width: 40px;
    height: 25px;
    border-radius: 5px;
    background: #cbba64;
    content: "";
  }
`;

const Middle = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  span {
    vertical-align: middle;
  }
`;

const Bottom = styled.p`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;

export default Card;
