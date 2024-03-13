import CardBox from "../components/CardBox";

export default function CardList({ onNext }) {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        <div className="button-basic" onClick={onNext}>
          <CardBox>+</CardBox>
        </div>
      </div>
    </div>
  );
}
