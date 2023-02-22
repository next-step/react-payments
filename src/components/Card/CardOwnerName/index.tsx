import { ONWER_NAME_LENGTH_MAX } from '../../../constants/Card'
import { Input } from '../../Element'

const CardOwnerName = ({ ownerName, ownerNameValueHandler }: CardOwnerNameProps) => {
  return (
    <div className='input-container'>
      <div className='input-title-box'>
        <span className='input-title'>카드 소유자 이름(선택)</span>
        <span className='input-title'>{`${ownerName.length}/${ONWER_NAME_LENGTH_MAX}`}</span>
      </div>
      <Input
        className='input-basic'
        onChange={ownerNameValueHandler}
        value={ownerName}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
      />
    </div>
  )
}

export default CardOwnerName
