import { useNavigate } from "react-router-dom";

const CardListPage = () => {
  // 페이지 이동 함수 만들기 (리액트 라우터)
  const navigate = useNavigate();
  const moveRegistCard = () => {
    navigate('regist-card')
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        <div className="card-box">
          <div className="empty-card" onClick={moveRegistCard}>+</div>
        </div>
      </div>
    </div>
  );
};

export default CardListPage;
