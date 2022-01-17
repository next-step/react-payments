import styled from '@emotion/styled';

export const CardBox = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0px;
`;

export const CardBasic = styled.div<{ size: string; color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: #575757;

  ${({ color }) => (color ? `background: ${color};` : `background: #d2d2d2;`)}

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
  ${({ size }) =>
    size === 'small'
      ? `width: 208px;
  height: 130px;`
      : `width: 290px;
  height: 180px;`}
`;

export const CardChip = styled.div<{ size: string }>`
  width: 40px;
  height: 26px;

  ${({ size }) =>
    size === 'small'
      ? `left: 95px;
  top: 122px;`
      : `width: 55.04px;
  height: 35.77px;
  font-size: 24px;`}

  background: #cbba64;
  border-radius: 4px;
`;

export const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;

export const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardText = styled.span<{ size: string }>`
  margin: 0 16px;

  ${({ size }) =>
    size === 'small'
      ? `font-size: 14px;
  line-height: 16px;`
      : `font-size: 18px;
  line-height: 20px;`}

  vertical-align: middle;
  font-weight: 400;
`;

export const SecurityText = styled.span`
  -webkit-text-security: disc;
`;

export const CardNumber = styled.span<{ size: string }>`
  display: inline-block;
  text-align: center;
  width: 30px;
  ${({ size }) =>
    size === 'small'
      ? `font-size: 14px;
  margin: 0px 5px;`
      : `font-size: 18px;
      margin: 0px 12px;
  `}
`;
