import styled from "@emotion/styled";

import isPublic from "./utils/isPublic";

const Card = ({ card }) => {
  const { name, number, owner, expiryDate, nickname } = card;

  return (
    <Wrap>
      <Item>
        <Top>{name}</Top>
        <Middle>
          {number.split(" ").map((text, index) => (
            <span key={index}>{isPublic(index) ? text : "●●●●"}</span>
          ))}
        </Middle>
        <Bottom>
          <span>{owner}</span>
          <span>{expiryDate}</span>
        </Bottom>
      </Item>
      <Nickname>{nickname}</Nickname>
    </Wrap>
  );
};

const Wrap = styled.li`
  & + & {
    margin-top: 20px;
  }
`;

export const Item = styled.div`
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
    letter-spacing: 2px;
    vertical-align: middle;
  }
`;

const Bottom = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
`;

const Nickname = styled.h2`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  color: #575757;
`;

export default Card;
