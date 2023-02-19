const MAX_CVC_LENGTH = 3;

type CardCVCInputProps = {
  cvc: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardCVCInput = ({ cvc, onChange }: CardCVCInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        value={cvc}
        onChange={onChange}
        maxLength={MAX_CVC_LENGTH}
        required
      />
    </div>
  );
};

export default CardCVCInput;
