import styled from "styled-components";
import Title from "../components/Title";
import Button from "../components/Button";

function CompleteCard() {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <Title marginBottom="2.5rem">카드등록이 완료되었습니다.</Title>
        </div>
        <CardBox>
          <div className="big-card">
            <CardTop>
              <span className="card-text__big">클린카드</span>
            </CardTop>
            <CardMiddle>
              <div className="big-card__chip"></div>
            </CardMiddle>
            <CardBottom>
              <CardBottomNumber>
                <span className="card-text__big">
                  1111 - 2222 - oooo - oooo
                </span>
              </CardBottomNumber>
              <CardBottomInfo>
                <span className="card-text__big">YUJO</span>
                <span className="card-text__big">12 / 23</span>
              </CardBottomInfo>
            </CardBottom>
          </div>
        </CardBox>
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
          />
        </div>
        <Button marginTop="11.5rem">다음</Button>
      </div>
    </div>
  );
}

export default CompleteCard;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const CardTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
