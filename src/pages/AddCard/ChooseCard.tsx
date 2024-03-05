import React from 'react'
import Title from '../../components/Title'

const ChooseCard = () => {
  return (
    <>
      <div className="root">
        <div className="app">
					<Title>카드 추가</Title>
          <div className="card-box">
            <div className="small-card">
              <div className="card-top">
                <span className="card-text">클린카드</span>
              </div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom__number">
                  <span className="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              <input className="input-basic" type="text" value="1111" />
              <input className="input-basic" type="text" value="2222" />
              <input className="input-basic" type="password" value="1111" />
              <input className="input-basic" type="password" value="1111" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              <input className="input-basic" type="text" placeholder="MM" />
              <input className="input-basic" type="text" placeholder="YY" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <input
              type="text"
              className="input-basic"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <input className="input-basic w-25" type="password" />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
        <div className="modal-dimmed">
          <div className="modal">
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
            </div>
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChooseCard

// {/* <!--

// PAGE 03

//  --> */}

// <h2>3️⃣ 카드 추가 - 입력 완료</h2>
// <div class="root">
// 	<div class="app">
// 		<Title>카드 추가</Title>
// 		<div class="card-box">
// 			<div class="small-card">
// 				<div class="card-top">
// 					<span class="card-text">클린카드</span>
// 				</div>
// 				<div class="card-middle">
// 					<div class="small-card__chip"></div>
// 				</div>
// 				<div class="card-bottom">
// 					<div class="card-bottom__number">
// 						<span class="card-text">1111 - 2222 - oooo - oooo</span>
// 					</div>
// 					<div class="card-bottom__info">
// 						<span class="card-text">YUJO</span>
// 						<span class="card-text">12 / 23</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="input-container">
// 			<span class="input-title">카드 번호</span>
// 			<div class="input-box">
// 				<input class="input-basic" type="text" value="1111" />
// 				<input class="input-basic" type="text" value="2222" />
// 				<input class="input-basic" type="password" value="1111" />
// 				<input class="input-basic" type="password" value="1111" />
// 			</div>
// 		</div>
// 		<div class="input-container">
// 			<span class="input-title">만료일</span>
// 			<div class="input-box w-50">
// 				<input
// 					class="input-basic"
// 					type="text"
// 					placeholder="MM"
// 					value="12"
// 				/>
// 				<input
// 					class="input-basic"
// 					type="text"
// 					placeholder="YY"
// 					value="23"
// 				/>
// 			</div>
// 		</div>
// 		<div class="input-container">
// 			<span class="input-title">카드 소유자 이름(선택)</span>
// 			<input type="text" class="input-basic" value="YUJO" />
// 		</div>
// 		<div class="input-container">
// 			<span class="input-title">보안코드(CVC/CVV)</span>
// 			<input class="input-basic w-25" type="password" value="111" />
// 		</div>
// 		<div class="input-container">
// 			<span class="input-title">카드 비밀번호</span>
// 			<input class="input-basic w-15" type="password" value="1" />
// 			<input class="input-basic w-15" type="password" value="1" />
// 			<input class="input-basic w-15" type="password" value="1" />
// 			<input class="input-basic w-15" type="password" value="1" />
// 		</div>
// 		<div class="button-box">
// 			<span class="button-text">다음</span>
// 		</div>
// 	</div>
// </div>
