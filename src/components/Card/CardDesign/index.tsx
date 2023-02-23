import { useState } from 'react'
import { CARD_NAME_1, CARD_NAME_2, CARD_NAME_GAP } from '../../../constants/Card'
import Button from '../../Element/Button'

const CardDesign = () => {
  const [cardDesgin, setCardDesign] = useState('')

  return (
    <div className='modal-dimmed'>
      <div className='modal'>
        <div className='flex-center'>
          {CARD_NAME_1.map((data, i) => (
            <div key={data} className='modal-item-container'>
              <Button className={`modal-item-dot card-color${i}`} />
              <span className='modal-item-name'>{data}</span>
            </div>
          ))}
        </div>
        <div className='flex-center'>
          {CARD_NAME_2.map((data, i) => (
            <div key={data} className='modal-item-container'>
              <Button className={`modal-item-dot card-color${i + CARD_NAME_GAP}`} />
              <span className='modal-item-name'>{data}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardDesign
