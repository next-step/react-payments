import styled, { css } from "styled-components";

import type { CardProps } from "./Card";

const smallCardTextStyle = css`
  font-size: 14px;
  line-height: 16px;
`;

const bigCardTextStyle = css`
  font-size: 18px;
  line-height: 20px;
`;

export const CardText = styled.div`
  margin: 0 10px;
  color: #525252;
  vertical-align: middle;
  font-weight: 400;
`;

export const CardTopWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CardMiddleWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;

const smallCardChipStyle = css`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;
`;

const bigCardChipStyle = css`
  width: 55.04px;
  height: 35.77px;
`;

export const CardChip = styled.div`
  background: #cbba64;
  border-radius: 4px;
`;

export const CardBottomWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardNumberWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardInfoWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const smallCardContainerStyle = css`
  width: 208px;
  height: 130px;
`;

const largeCardContainerStyle = css`
  width: 290px;
  height: 180px;
`;

export const CardContainer = styled.div<Pick<CardProps, "size" | "color">>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: ${(props) => props.color};
  ${(props) =>
    props.size === "big" ? largeCardContainerStyle : smallCardContainerStyle}

  ${CardChip} {
    ${(props) => (props.size === "big" ? bigCardChipStyle : smallCardChipStyle)}
  }

  ${CardText} {
    ${(props) => (props.size === "big" ? bigCardTextStyle : smallCardTextStyle)}
  }
`;
