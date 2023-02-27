import Dot from "components/Dot/Dot";
import Modal from "components/Modal/Modal";
import styled from "styled-components";
import { ReactEventHandler } from "react";
export type DotListProps = {
  onSelectedDot: ReactEventHandler<HTMLDivElement>;
};

export const DotList = ({ onSelectedDot }: DotListProps) => {
  return (
    <Modal>
      <Container>
        <Dot color="red" value="하나카드" onClick={onSelectedDot} />
        <Dot color="pink" value="국민카드" onClick={onSelectedDot} />
        <Dot color="cyon" value="신한카드" onClick={onSelectedDot} />
        <Dot color="purple" value="클린카드" onClick={onSelectedDot} />
      </Container>
      <Container>
        <Dot color="blue" value="토스카드" onClick={onSelectedDot} />
        <Dot color="green" value="네이버카드" onClick={onSelectedDot} />
        <Dot color="yellow" value="카카오카드" onClick={onSelectedDot} />
        <Dot color="orange" value="오렌지카드" onClick={onSelectedDot} />
      </Container>
    </Modal>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DotList;
