import styled from "styled-components";

export const CardNameModalContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  border-radius: 15px;

  z-index: 5;
`;

export const CardNameMItemWrapper = styled.div`
  width: 375px;
  height: 220px;

  border-radius: 5px 5px 15px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background: #fff;
  z-index: 10;
`;

export const CardNameItemButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardNameIcon = styled.div<{ color: string }>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.color};
`;

export const CardName = styled.div`
  font-size: 12px;
  letter-spacing: -0.085rem;
`;
