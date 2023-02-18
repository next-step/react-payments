import CardDotInfo from "components/CardDotInfo";
import Modal from "components/Modal";
import styled from "styled-components";
const CardDotList = ({ close }) => {
  // 모달 바깥영역클릭시 닫치게 만들기
  return (
    <Modal>
      <Container>
        <CardDotInfo color="red" text="하나카드" />
        <CardDotInfo color="pink" text="국민카드" />
        <CardDotInfo color="cyon" text="신한카드" />
        <CardDotInfo color="purple" text="클린카드" />
      </Container>
      <Container>
        <CardDotInfo color="blue" text="토스카드" />
        <CardDotInfo color="green" text="네이버카드" />
        <CardDotInfo color="yellow" text="카카오카드" />
        <CardDotInfo color="orange" text="오렌지카드" />
      </Container>
    </Modal>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CardDotList;
