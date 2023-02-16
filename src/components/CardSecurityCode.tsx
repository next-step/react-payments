import { ChangeEvent } from 'react';

type SecurityCodeProps = {
  security: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const CardSecurityCode = ({ security, onChange }: SecurityCodeProps) => {
  console.log(security);
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" type="password" maxLength={3} onChange={onChange} value={security} />
    </div>
  );
};
export default CardSecurityCode;
