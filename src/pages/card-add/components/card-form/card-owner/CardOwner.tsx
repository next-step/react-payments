import Input from '@/components/common/input/Input';
import {CARD_OWNER_NAME_LIMIT} from '@/domain/constant';
import useCardOwner from './hook/useCardOwner';
import {type ForwardedRef, forwardRef} from 'react';

const CardOwner = forwardRef(({}, ref: ForwardedRef<HTMLInputElement>) => {
  const {ownerName = '', handleChange} = useCardOwner();

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span title='카드 소유자 이름(선택)' className='input-title'>
          카드 소유자 이름(선택)
        </span>
        <span className='input-title'>{`${ownerName?.length || 0}/30`}</span>
      </div>
      <Input
        type='text'
        name='ownerName'
        value={ownerName}
        onChange={handleChange}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        maxLength={CARD_OWNER_NAME_LIMIT}
        ref={ref}
      />
    </>
  );
});

export default CardOwner;
