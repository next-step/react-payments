import Input from '../atoms/Input';
import Text from '../atoms/Text';

function CardSecurityCode(props) {
  const { securityCode } = props;

  return (
    <>
      <Text className="input-title" text="보안코드(CVC/CVV)" />
      <Input
        className="input-basic"
        extraClassName="w-25"
        type="password"
        value={securityCode}
      />
    </>
  );
}

export default CardSecurityCode;
