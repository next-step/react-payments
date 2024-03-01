import Input from '../atoms/Input';
import Text from '../atoms/Text';

function CardPassword(props) {
  const { password } = props;

  return (
    <>
      <Text className="input-title" text="카드 비밀번호" />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        value={password}
      />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        value={password}
      />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        value={password}
      />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        value={password}
      />
    </>
  );
}

export default CardPassword;
