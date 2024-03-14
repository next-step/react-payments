import Input from '@/components/common/input/Input';
import useSecurityCode from './hook/useSecurityCode';

const MAX_LENGTH = 3;

const CardSecurityCode = () => {
  const { securityCode, handleScurityCode } = useSecurityCode();
  return (
    <Input
      type="password"
      className="w-25"
      name="securityCode"
      value={securityCode}
      onChange={handleScurityCode}
      maxLength={MAX_LENGTH}
    />
  );
};

export default CardSecurityCode;
