import Input from '@/components/common/input/Input';
import { CARD_SECURITY_CODE_LIMIT } from '@/domain/constant';
import useSecurityCode from './hook/useSecurityCode';
import { type ForwardedRef, forwardRef, RefObject } from 'react';
import questionIcon from '@/assets/question.svg';
import Tooltip from '@/components/common/tooltip/Tooltip';

type CardSecurityCodeProps = {
  nextFocus: RefObject<HTMLInputElement>;
};
const CardSecurityCode = forwardRef(
  ({ nextFocus }: CardSecurityCodeProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { securityCode = '', handleScurityCode } = useSecurityCode({ nextFocus });

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
        className="gap-5"
      >
        <Input
          type="password"
          className="w-25"
          name="securityCode"
          value={securityCode}
          onChange={handleScurityCode}
          maxLength={CARD_SECURITY_CODE_LIMIT}
          ref={ref}
        />
        <Tooltip content="보안코드 관련 툴팁입니다">
          <img src={questionIcon} alt="Question Icon" />
        </Tooltip>
      </div>
    );
  },
);

export default CardSecurityCode;
