import styled, { css } from "styled-components";
import Text from "components/Text/Text";
import { ColorType, CompanyType } from "types";
import { ReactEventHandler } from "react";

export type CardProps = {
  size: "small" | "big";
  type: "primary" | "add";
  number?: string;
  expireMonth?: string;
  expireYear?: string;
  ownerName?: string;
  color?: ColorType;
  company?: CompanyType;
  onClick?: ReactEventHandler<HTMLDivElement>;
};

const Card = ({ type, color, company, size, number, expireMonth, expireYear, ownerName, onClick }: CardProps) => {
  return (
    <Layout onClick={onClick}>
      {type === "primary" ? (
        <Container color={color} size={size}>
          <Top>{company && <Text fontSize="s" weight="normal" label={company} />}</Top>
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
