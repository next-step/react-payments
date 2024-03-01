import Input from '../atoms/Input';
import Text from '../atoms/Text';

function CardExpiration(props) {
  const { MM, YY } = props;
  return (
    <>
      <Text className="input-title" text="만료일" />
      <div className="input-box w-50">
        <Input
          className="input-basic"
          type="text"
          value={MM}
          placeholder="MM"
        />
        <Input
          className="input-basic"
          type="text"
          value={YY}
          placeholder="YY"
        />
      </div>
    </>
  );
}

export default CardExpiration;
