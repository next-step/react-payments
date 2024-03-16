import { Card } from "@/components/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardList = () => {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        <Card
          cardCorporation="XX카드"
          cardNumber="1234-1234-1234-1234"
          expireDay="03/25"
          name="김철수"
        />
        <Link to={"/register/card"}>
          <EmptyCard className="card-box">
            <div className="empty-card">+</div>
          </EmptyCard>
        </Link>
      </div>
    </div>
  );
};

const EmptyCard = styled.button`
  cursor: pointer;
`;
