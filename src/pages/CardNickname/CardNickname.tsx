import React from 'react';

// TODO: nickname context 추가
export function CardNickname() {
  // dynamic route가 있다면 그 id를 가지고 localhost에서 가져온다.
  // dynamic route로 정보를 가져왔는데 존재하지 않는다면 error
  // 없다면 Context에 저장돼있는 정보를 사용한다.
  // dynamic route가 없는데 context 정보가 없다면 error

  // card의 id는 dynamic route가 없다면 랜덤으로 새로 붙여준다.
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <div className="card-box">
        <div className="big-card">
          <div className="card-top">
            <span className="card-text__big">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="big-card__chip" />
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text__big">1111 - 2222 - oooo - oooo</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">YUJO</span>
              <span className="card-text__big">12 / 23</span>
            </div>
          </div>
        </div>
      </div>
      <div className="input-container flex-center w-100">
        <input className="input-underline w-75" type="text" placeholder="카드의 별칭을 입력해주세요." />
      </div>
      <div className="button-box mt-50">
        <span className="button-text">다음</span>
      </div>
    </div>
  );
}
