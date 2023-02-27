import styled, { css } from "styled-components";
import Text from "components/Text/Text";
import { ColorType, CompanyType, NewCardType } from "types";
import { ReactEventHandler, useContext } from "react";
import IconButton from "components/IconButton/IconButton";
import { CardContext } from "context/Card/CardContext";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  size: "small" | "big";
  type: "primary" | "add";
  className?: string;
  id?: string;
  number?: string;
  expireMonth?: string;
  expireYear?: string;
  ownerName?: string;
  color?: ColorType;
  company?: CompanyType;
  onClick?: ReactEventHandler<HTMLDivElement>;
};

const Card = ({
  type,
  color,
  company,
  size,
  number,
  expireMonth,
  expireYear,
  ownerName,
  id,
  className,
  onClick,
}: CardProps) => {
  const cardCtx = useContext(CardContext);
  const MyCardList = [...cardCtx.state.list].reverse();
  const selectedCard = MyCardList.find((card: NewCardType) => card.id === id);
  const navigate = useNavigate();

  const handleRemove = () => {
    if (!selectedCard) return alert("현재 선택한 카드가 리스트에 존재하지 않습니다");
    cardCtx.removeCard(selectedCard);
  };
  const handleModify = (e) => {
    if (!selectedCard) return alert("현재 선택한 카드가 리스트에 존재하지 않습니다");
    cardCtx.removeCard(selectedCard);
    cardCtx.addCardToStore(selectedCard);
    navigate("/complete");
  };

  return (
    <Layout onClick={onClick} id={id} className={className}>
      {type === "primary" ? (
        <Container color={color} size={size}>
          <Top>
            {company && <Text fontSize="s" weight="normal" label={company} />}
            {id && (
              <div>
                <IconButton onClick={handleModify} name="modify" size="1x" color="black" />
                <IconButton onClick={handleRemove} name="remove" size="1x" color="black" />
              </div>
            )}
          </Top>
          <Middle>
            <Chip />
          </Middle>
          <Bottom>
            {number && <Text fontSize="m" weight="normal" label={number} />}
            <InfoContainer>
              {ownerName && <Text fontSize="s" weight="bold" label={ownerName} />}
              {expireMonth && expireYear && <Text fontSize="s" weight="bold" label={`${expireMonth}/${expireYear}`} />}
            </InfoContainer>
          </Bottom>
        </Container>
      ) : (
        <Container color={color} size={size}>
          +
        </Container>
      )}
    </Layout>
  );
};

export default Card;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

type ContainerProps = {
  color?: ColorType;
  size: "small" | "big";
};
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;

  ${({ color }) =>
    color === "red"
      ? css`
          background: #e14141;
        `
      : color === "cyon"
      ? css`
          background: #92e3d5;
        `
      : color === "blue"
      ? css`
          background: #557ce5;
        `
      : color === "green"
      ? css`
          background: #73bc6d;
        `
      : color === "pink"
      ? css`
          background: #e76e9b;
        `
      : color === "yellow"
      ? css`
          background: #fbcc58;
        `
      : color === "orange"
      ? css`
          background: #f37e3b;
        `
      : color === "purple"
      ? css`
          background: #df59ba;
        `
      : css`
          background: #e5e5e5;
        `}
  ${({ size }) =>
    size === "small"
      ? css`
          width: 208px;
          height: 130px;
        `
      : css`
          width: 290px;
          height: 180px;
        `}
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (props.theme !== "add" ? "30px" : "0px")};
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const Chip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;
  background-color: #cbba64;
  border-radius: 4px;
`;
