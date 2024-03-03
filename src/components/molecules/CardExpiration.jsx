import Input from '../atoms/Input';
import Text from '../atoms/Text';

const mmRegExp = /^(0[1-9]|1[0-2])$/;
const yyRegExp = /^\d{2}$/;
const numberRegExp = /[^\d]/g;

function CardExpiration(props) {
  const { onData } = props;

  const handleChange = (event, type) => {
    const { value } = event.target;
    const newValue = value.replace(numberRegExp, '');
    event.target.value = newValue;
    if (
      newValue === ''
      || (type === 'mm' && mmRegExp.test(newValue))
      || (type === 'yy' && yyRegExp.test(newValue))
    ) {
      onData(type, newValue);
    }
  };

  return (
    <>
      <Text className="input-title" text="만료일" />
      <div className="input-box w-50">
        <Input
          className="input-basic"
          type="text"
          placeholder="MM"
          onChange={(e) => handleChange(e, 'mm')}
          maxLength={2}
        />
        <Input
          className="input-basic"
          type="text"
          placeholder="YY"
          onChange={(e) => handleChange(e, 'yy')}
          maxLength={2}
        />
      </div>
    </>
  );
}

export default CardExpiration;
