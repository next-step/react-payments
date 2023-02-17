import { Link } from "react-router-dom";

export default function AddedCard() {
  return (
    <div class="app flex-column-center">
      <div class="flex-center">
        <h2 class="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <div class="card-box">
        <div class="big-card">
          <div class="card-top">
            <span class="card-text__big">클린카드</span>
          </div>
          <div class="card-middle">
            <div class="big-card__chip"></div>
          </div>
          <div class="card-bottom">
            <div class="card-bottom__number">
              <span class="card-text__big">1111 - 2222 - oooo - oooo</span>
            </div>
            <div class="card-bottom__info">
              <span class="card-text__big">YUJO</span>
              <span class="card-text__big">12 / 23</span>
            </div>
          </div>
        </div>
      </div>
      <div class="input-container flex-center w-100">
        <input
          class="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <Link className="button-text" to={`/AddedCardList`}>
        <div class="button-box mt-50">
          <span class="button-text">다음</span>
        </div>
      </Link>
    </div>
  );
}
