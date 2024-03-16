import Input from '@/components/common/input/Input';
import {CARD_SECURITY_CODE_LIMIT} from '@/domain/constant';
import useSecurityCode from './hook/useSecurityCode';
import {type ForwardedRef, forwardRef} from 'react';

const CardSecurityCode = forwardRef(
  ({nextFocus}: {nextFocus: any}, ref: ForwardedRef<HTMLInputElement>) => {
    const {securityCode = '', handleScurityCode} = useSecurityCode({nextFocus});

    return (
      <Input
        type='password'
        className='w-25'
        name='securityCode'
        value={securityCode}
        onChange={handleScurityCode}
        maxLength={CARD_SECURITY_CODE_LIMIT}
        ref={ref}
      />
    );
  },
);

export default CardSecurityCode;
