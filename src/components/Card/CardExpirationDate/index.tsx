import { Input } from '../../Element'

const CardExpirationDate = ({
  cardExpirationDate,
  cardExpirationDateHandler,
  fetchedTwoLettersDataHanlder,
}: CardExpirationDateProps) => {
  const { MM, YY } = cardExpirationDate
  return (
    <div className='input-container'>
      <span className='input-title'>만료일</span>
      <div className='input-box w-50'>
        <Input
          id='MM'
          value={MM}
          onBlur={fetchedTwoLettersDataHanlder}
          placeholder='MM'
          onChange={cardExpirationDateHandler}
        />
        <Input
          id='YY'
          value={YY}
          onBlur={fetchedTwoLettersDataHanlder}
          placeholder='YY'
          onChange={cardExpirationDateHandler}
        />
      </div>
    </div>
  )
}

export default CardExpirationDate
