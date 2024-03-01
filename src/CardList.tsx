import ui from './styles/index.module.css'
const CardList = () => {
  return (
    <>
      <h2>5️⃣ 카드 목록</h2>
      <div className={ui['root']}>
        <div className={`${ui['app']} ${ui['flex-column-center']}`}>
          <div className={ui['flex-center']} flex-center>
            <h2 className={ui['page-title']} mb-10>
              보유 카드
            </h2>
          </div>
          <div className={ui['card-box']}>
            <div className={ui['small-card']}>
              <div className={ui['card-top']}>
                <span className={ui['card-text']}>클린카드</span>
              </div>
              <div className={ui['card-middle']}>
                <div className={ui['small-card__chip']}></div>
              </div>
              <div className={ui['card-bottom']}>
                <div className={ui['card-bottom__number']}>
                  <span className={ui['card-text']}>1111 - 2222 - oooo - oooo</span>
                </div>
                <div className={ui['card-bottom__info']}>
                  <span className={ui['card-text']}>YUJO</span>
                  <span className={ui['card-text']}>12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <span className={ui['card-nickname']}>법인카드</span>
          <div className={ui['card-box']}>
            <div className={ui['empty-card']}>+</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardList
