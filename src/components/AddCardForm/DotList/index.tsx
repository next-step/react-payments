import Dot from "components/Dot";
import Modal from "components/Modal";
import styled from "styled-components";
const DotList = ({ close, setColor, setCardCompnay }) => {
  const handleDot = (e) => {
    const color = e.currentTarget.children[0].getAttribute("color");
    const company = e.currentTarget.children[1].textContent;
    setColor(color);
    setCardCompnay(company);
    close();
  };

  return (
    <Modal>
      <Container>
        <Dot color="red" value="하나카드" onClick={handleDot} />
        <Dot color="pink" value="국민카드" onClick={handleDot} />
        <Dot color="cyon" value="신한카드" onClick={handleDot} />
        <Dot color="purple" value="클린카드" onClick={handleDot} />
      </Container>
      <Container>
        <Dot color="blue" value="토스카드" onClick={handleDot} />
        <Dot color="green" value="네이버카드" onClick={handleDot} />
        <Dot color="yellow" value="카카오카드" onClick={handleDot} />
        <Dot color="orange" value="오렌지카드" onClick={handleDot} />
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
