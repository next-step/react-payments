import { ONWER_NAME_LENGTH_MAX } from '../../../constants/Card'
import { Input } from '../../Element'

const CardOwnerName = ({ ownerName, ownerNameValueHandler }: CardOwnerNameProps) => {
  return (
    <div className='input-container'>
      <span className='input-title'>카드 소유자 이름(선택)</span>
      <span>{`현재 입력${ownerName.length}자리수 최대 입력${ONWER_NAME_LENGTH_MAX - ownerName.length}자리 수`}</span>
      <Input
        onChange={ownerNameValueHandler}
        value={ownerName}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
      />
    </div>
  )
}

export default CardOwnerName
