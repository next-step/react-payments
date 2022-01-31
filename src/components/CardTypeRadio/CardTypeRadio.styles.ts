import styled from "@emotion/styled";
import { CardType } from "../../@types";
import { CARD_COLOR } from "../../constants/card";

interface RadioDiscProps {
  cardType?: CardType;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    position: absolute;
    width: 0;
    height: 0;
  }

  input:checked ~ .radio-disc {
    outline: #3858e6 solid 2px;
    filter: brightness(1.2);
  }
`;

const RadioDisc = styled.div<RadioDiscProps>`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${({ cardType }) => CARD_COLOR[cardType ?? "NONE"]};
`;

const CardName = styled.p`
  font-size: 12px;
`;

export default { Container, Label, RadioDisc, CardName };
