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
          name='MM'
          value={MM}
          placeholder='MM'
          className='input-basic'
          onBlur={fetchedTwoLettersDataHanlder}
          onChange={cardExpirationDateHandler}
        />
        <Input
          name='YY'
          value={YY}
          placeholder='YY'
          className='input-basic'
          onBlur={fetchedTwoLettersDataHanlder}
          onChange={cardExpirationDateHandler}
        />
      </div>
    </div>
  )
}

export default CardExpirationDate
