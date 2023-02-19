const MAX_PASSWORD_LENGTH = 1;

type CardPasswordInputProps = {
  password: string[];
  onChange: (
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardPasswordInput = ({
  password,
  onChange,
}: CardPasswordInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div>
        <input
          className="input-basic w-15"
          type="password"
          maxLength={MAX_PASSWORD_LENGTH}
          onChange={onChange(0)}
          value={password[0]}
        />
        <input
          className="input-basic w-15"
          type="password"
          maxLength={MAX_PASSWORD_LENGTH}
          onChange={onChange(1)}
          value={password[1]}
        />
        <input
          className="input-basic w-15 card-pass-word__disabled"
          type="password"
          disabled
          value="*"
        />
        <input
          className="input-basic w-15 card-pass-word__disabled"
          type="password"
          disabled
          value="*"
        />
      </div>
    </div>
  );
};

export default CardPasswordInput;
