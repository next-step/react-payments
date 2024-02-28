function App() {
  return (
    <>
      <h1>React Clean Code Payments CSS example</h1>

      <h2>1️⃣ 카드 추가</h2>
      <div className='root'>
        <div className='app'>
          <h2 className='page-title'>카드 추가</h2>
          <div className='card-box'>
            <div className='empty-card'>
              <div className='card-top'></div>
              <div className='card-middle'>
                <div className='small-card__chip'></div>
              </div>
              <div className='card-bottom'>
                <div className='card-bottom__info'>
                  <span className='card-text'>NAME</span>
                  <span className='card-text'>MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 번호</span>
            <div className='input-box'>
              <input className='input-basic' type='text' />
              <input className='input-basic' type='text' />
              <input className='input-basic' type='password' />
              <input className='input-basic' type='password' />
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>만료일</span>
            <div className='input-box w-50'>
              <input className='input-basic' type='text' placeholder='MM' />
              <input className='input-basic' type='text' placeholder='YY' />
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 소유자 이름(선택)</span>
            <input
              type='text'
              className='input-basic'
              placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
            />
          </div>
          <div className='input-container'>
            <span className='input-title'>보안코드(CVC/CVV)</span>
            <input className='input-basic w-25' type='password' />
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 비밀번호</span>
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
          </div>
          <div className='button-box'>
            <span className='button-text'>다음</span>
          </div>
        </div>
      </div>

      <h2>2️⃣ 카드 추가 - 카드사 선택</h2>
      <div className='root'>
        <div className='app'>
          <h2 className='page-title'>카드 추가</h2>
          <div className='card-box'>
            <div className='small-card'>
              <div className='card-top'>
                <span className='card-text'>클린카드</span>
              </div>
              <div className='card-middle'>
                <div className='small-card__chip'></div>
              </div>
              <div className='card-bottom'>
                <div className='card-bottom__number'>
                  <span className='card-text'>1111 - 2222 - oooo - oooo</span>
                </div>
                <div className='card-bottom__info'>
                  <span className='card-text'>NAME</span>
                  <span className='card-text'>MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 번호</span>
            <div className='input-box'>
              <input className='input-basic' type='text' value='1111' />
              <input className='input-basic' type='text' value='2222' />
              <input className='input-basic' type='password' value='1111' />
              <input className='input-basic' type='password' value='1111' />
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>만료일</span>
            <div className='input-box w-50'>
              <input className='input-basic' type='text' placeholder='MM' />
              <input className='input-basic' type='text' placeholder='YY' />
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 소유자 이름(선택)</span>
            <input
              type='text'
              className='input-basic'
              placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
            />
          </div>
          <div className='input-container'>
            <span className='input-title'>보안코드(CVC/CVV)</span>
            <input className='input-basic w-25' type='password' />
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 비밀번호</span>
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
          </div>
          <div className='button-box'>
            <span className='button-text'>다음</span>
          </div>
        </div>
        <div className='modal-dimmed'>
          <div className='modal'>
            <div className='flex-center'>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
            </div>
            <div className='flex-center'>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
              <div className='modal-item-container'>
                <div className='modal-item-dot'></div>
                <span className='modal-item-name'>클린 카드</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      <div className='root'>
        <div className='app'>
          <h2 className='page-title'>카드 추가</h2>
          <div className='card-box'>
            <div className='small-card'>
              <div className='card-top'>
                <span className='card-text'>클린카드</span>
              </div>
              <div className='card-middle'>
                <div className='small-card__chip'></div>
              </div>
              <div className='card-bottom'>
                <div className='card-bottom__number'>
                  <span className='card-text'>1111 - 2222 - oooo - oooo</span>
                </div>
                <div className='card-bottom__info'>
                  <span className='card-text'>YUJO</span>
                  <span className='card-text'>12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 번호</span>
            <div className='input-box'>
              <input className='input-basic' type='text' value='1111' />
              <input className='input-basic' type='text' value='2222' />
              <input className='input-basic' type='password' value='1111' />
              <input className='input-basic' type='password' value='1111' />
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>만료일</span>
            <div className='input-box w-50'>
              <input
                className='input-basic'
                type='text'
                placeholder='MM'
                value='12'
              />
              <input
                className='input-basic'
                type='text'
                placeholder='YY'
                value='23'
              />
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 소유자 이름(선택)</span>
            <input type='text' className='input-basic' value='YUJO' />
          </div>
          <div className='input-container'>
            <span className='input-title'>보안코드(CVC/CVV)</span>
            <input className='input-basic w-25' type='password' value='111' />
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 비밀번호</span>
            <input className='input-basic w-15' type='password' value='1' />
            <input className='input-basic w-15' type='password' value='1' />
            <input className='input-basic w-15' type='password' value='1' />
            <input className='input-basic w-15' type='password' value='1' />
          </div>
          <div className='button-box'>
            <span className='button-text'>다음</span>
          </div>
        </div>
      </div>

      <h2>4️⃣ 카드 추가 완료</h2>
      <div className='root'>
        <div className='app flex-column-center'>
          <div className='flex-center'>
            <h2 className='page-title mb-10'>카드등록이 완료되었습니다.</h2>
          </div>
          <div className='card-box'>
            <div className='big-card'>
              <div className='card-top'>
                <span className='card-text__big'>클린카드</span>
              </div>
              <div className='card-middle'>
                <div className='big-card__chip'></div>
              </div>
              <div className='card-bottom'>
                <div className='card-bottom__number'>
                  <span className='card-text__big'>
                    1111 - 2222 - oooo - oooo
                  </span>
                </div>
                <div className='card-bottom__info'>
                  <span className='card-text__big'>YUJO</span>
                  <span className='card-text__big'>12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <div className='input-container flex-center w-100'>
            <input
              className='input-underline w-75'
              type='text'
              placeholder='카드의 별칭을 입력해주세요.'
            />
          </div>
          <div className='button-box mt-50'>
            <span className='button-text'>다음</span>
          </div>
        </div>
      </div>

      <h2>5️⃣ 카드 목록</h2>
      <div className='root'>
        <div className='app flex-column-center'>
          <div className='flex-center'>
            <h2 className='page-title mb-10'>보유 카드</h2>
          </div>
          <div className='card-box'>
            <div className='small-card'>
              <div className='card-top'>
                <span className='card-text'>클린카드</span>
              </div>
              <div className='card-middle'>
                <div className='small-card__chip'></div>
              </div>
              <div className='card-bottom'>
                <div className='card-bottom__number'>
                  <span className='card-text'>1111 - 2222 - oooo - oooo</span>
                </div>
                <div className='card-bottom__info'>
                  <span className='card-text'>YUJO</span>
                  <span className='card-text'>12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <span className='card-nickname'>법인카드</span>
          <div className='card-box'>
            <div className='empty-card'>+</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
