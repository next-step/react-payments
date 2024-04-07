import questionIcon from '@/assets/question.svg';

import { Input, Tooltip } from '@/components/common';

import { CARD_SECURITY_CODE_LIMIT } from '@/domain/constant';

import useSecurityCode from './hook/useSecurityCode';

import { RefObject, forwardRef } from 'react';

type CardSecurityCodeProps = {
  nextFocus: RefObject<HTMLInputElement>;
};
const CardSecurityCode = forwardRef<HTMLInputElement, CardSecurityCodeProps>(
  ({ nextFocus }, ref) => {
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
