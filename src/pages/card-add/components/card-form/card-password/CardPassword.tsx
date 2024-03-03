import Input from '@/components/common/input/Input';
import useCardPassword from './hook/useCardPassword';

const MAX_LENGTH = 1;

const CardPassword = () => {
  const { handleChange, refs } = useCardPassword();

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <Input
        className="input-basic w-15"
        type="password"
        name="firstCardPassword"
        onChange={(e) => handleChange(e, 0)}
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[0] = el;
        }}
      />
      <Input
        className="input-basic w-15"
        type="password"
        name="secondCardPassword"
        onChange={(e) => handleChange(e, 1)}
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[1] = el;
        }}
      />
      <div className="flex-center w-15">•</div>
      <div className="flex-center w-15">•</div>
    </div>
  );
};

export default CardPassword;
