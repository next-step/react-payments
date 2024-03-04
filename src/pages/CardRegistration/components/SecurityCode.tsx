import { InputContainer } from '../../../components';
import { CardAction } from '../reducer';

interface SecurityCode {
  securityCode: string;
  securityCodeDispatch: React.Dispatch<CardAction>;
}

export default function SecurityCode({ securityCode, securityCodeDispatch }: SecurityCode) {
  return (
    <InputContainer inputTitle={'보안코드(CVC/CVV)'}>
      <input
        className="input-basic w-25"
        type="password"
        maxLength={3}
        value={securityCode}
        onChange={(e) => securityCodeDispatch({ type: 'securityCode', param: e.target.value })}
      />
    </InputContainer>
  );
}
