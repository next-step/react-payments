function CardList() {
  return (
    <div class="root">
      <div class="app flex-column-center">
        <div class="flex-center">
          <h2 class="page-title mb-10">보유 카드</h2>
        </div>
        <div class="card-box">
          <div class="small-card">
            <div class="card-top">
              <span class="card-text">클린카드</span>
            </div>
            <div class="card-middle">
              <div class="small-card__chip"></div>
            </div>
            <div class="card-bottom">
              <div class="card-bottom__number">
                <span class="card-text">1111 - 2222 - oooo - oooo</span>
              </div>
              <div class="card-bottom__info">
                <span class="card-text">YUJO</span>
                <span class="card-text">12 / 23</span>
              </div>
            </div>
          </div>
        </div>
        <span class="card-nickname">법인카드</span>
        <div class="card-box">
          <div class="empty-card">+</div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
