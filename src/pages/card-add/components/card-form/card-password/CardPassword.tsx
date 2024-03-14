import Input from '@/components/common/input/Input';
import useCardPassword from './hook/useCardPassword';

const MAX_LENGTH = 1;

const CardPassword = () => {
  const { firstCardPassword, secondCardPassword, handleChange } = useCardPassword();

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <Input
        type="password"
        className="w-15"
        name="firstCardPassword"
        value={firstCardPassword}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
      />
      <Input
        type="password"
        className="w-15"
        name="secondCardPassword"
        value={secondCardPassword}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
      />
      <div className="flex-center w-15">•</div>
      <div className="flex-center w-15">•</div>
    </div>
  );
};

export default CardPassword;
