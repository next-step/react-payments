import Input from '@/components/common/input/Input';
import useSecurityCode from './hook/useSecurityCode';

const MAX_LENGTH = 3;

const CardSecurityCode = () => {
  const { handleScurityCode, inputRef } = useSecurityCode();
  return (
    <Input
      className="w-25"
      type="password"
      maxLength={MAX_LENGTH}
      name="securityCode"
      onInput={handleScurityCode}
      ref={inputRef}
    />
  );
};

export default CardSecurityCode;
