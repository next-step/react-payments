import React from 'react'
import './EmptyCard.css'

type EmptyCardProps = {
  onClick: () => void
}

const EmptyCard: React.FC<EmptyCardProps> = ({ onClick }) => {
  return (
    <div className='card-box'>
      <button type='button' onClick={onClick} className='empty-card empty-card__btn'>
        +
      </button>
    </div>
  )
}

export default EmptyCard
