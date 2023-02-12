interface Props {
  maxLength?: number;
  type?: string;
  placeholder?: string;
  className?: string;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

export default function BaseInput({ type, placeholder, className }: Props) {
  return (
    <input
      className={`${config.BASIC_CLASS} ${className}`}
      placeholder={placeholder}
      type={type || config.BASIC_TYPE}
    />
  );
}