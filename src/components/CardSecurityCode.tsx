import { ChangeEvent } from 'react';
import { CARD } from '../utils/cardConstants';

type SecurityCodeProps = {
  security: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const CardSecurityCode = ({ security, onChange }: SecurityCodeProps) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        maxLength={CARD.CVC_LENGTH}
        onChange={onChange}
        value={security}
      />
    </div>
  );
};
export default CardSecurityCode;
