import React from 'react'

const CardDesign = () => {
  return (
    <div className='card-box'>
      <div className='empty-card'>
        <div className='card-top' />
        <div className='card-middle'>
          <div className='small-card__chip' />
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number'>
            <span className='card-text'>1111 2222 oooo oooo</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>NAME</span>
            <span className='card-text'>MM / YY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDesign
