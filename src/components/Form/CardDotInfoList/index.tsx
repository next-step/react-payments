import CardDotInfo from "components/CardDotInfo";
import Modal from "components/Modal";
import styled from "styled-components";
const CardDotInfoList = ({ close, setCardInfo }) => {
  // 모달 바깥영역클릭시 닫치게 만들기
  const handleDotInfo = (e) => {
    const color = e.currentTarget.children[0].getAttribute("color");
    const company = e.currentTarget.children[1].textContent;
    setCardInfo({
      color,
      company,
    });
    close();
  };

  return (
    <Modal>
      <Container>
        <CardDotInfo color="red" text="하나카드" onClick={handleDotInfo} />
        <CardDotInfo color="pink" text="국민카드" onClick={handleDotInfo} />
        <CardDotInfo color="cyon" text="신한카드" onClick={handleDotInfo} />
        <CardDotInfo color="purple" text="클린카드" onClick={handleDotInfo} />
      </Container>
      <Container>
        <CardDotInfo color="blue" text="토스카드" onClick={handleDotInfo} />
        <CardDotInfo color="green" text="네이버카드" onClick={handleDotInfo} />
        <CardDotInfo color="yellow" text="카카오카드" onClick={handleDotInfo} />
        <CardDotInfo color="orange" text="오렌지카드" onClick={handleDotInfo} />
      </Container>
    </Modal>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CardDotInfoList;
