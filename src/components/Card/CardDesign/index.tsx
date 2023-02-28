import { CARD_NAME_LIST_1, CARD_NAME_LIST_2, CARD_NAME_LIST_GAP } from '../../../constants/Card'
import { Button } from '../../Element'

const CardDesign = ({ cardDesignNameHandler }: CardDesignProps) => {
  return (
    <div className='modal-dimmed'>
      <div className='modal'>
        <div className='flex-center'>
          {CARD_NAME_LIST_1.map((data, i) => (
            <div key={data} className='modal-item-container'>
              <Button onClick={cardDesignNameHandler} name={data} className={`modal-item-dot card-color${i}`} />
              <span className='modal-item-name'>{data}</span>
            </div>
          ))}
        </div>
        <div className='flex-center'>
          {CARD_NAME_LIST_2.map((data, i) => (
            <div key={data} className='modal-item-container'>
              <Button
                onClick={cardDesignNameHandler}
                name={data}
                className={`modal-item-dot card-color${i + CARD_NAME_LIST_GAP}`}
              />
              <span className='modal-item-name'>{data}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardDesign
