const CARD_NAME = ['포토 카드', '준 카드', '윤호 카드', '환오 카드', '태은 카드', '준일 카드', '은규 카드']

const CardDesign = () => {
  return (
    <div className='modal-dimmed'>
      <div className='modal'>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color1' />
            <span className='modal-item-name'>포코 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color2' />
            <span className='modal-item-name'>준 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color3' />
            <span className='modal-item-name'>현석 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color4' />
            <span className='modal-item-name'>윤호 카드</span>
          </div>
        </div>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color5' />
            <span className='modal-item-name'>환오 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color6' />
            <span className='modal-item-name'>태은 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color7' />
            <span className='modal-item-name'>준일 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot card-color8' />
            <span className='modal-item-name'>은규 카드</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDesign
