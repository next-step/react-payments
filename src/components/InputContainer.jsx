import Input from './Common/Input';

const InputContainer = ({
  title,
  inputList,
  cardInfo,
  onChange,
  inputBoxClass = '',
  hasBoxClass = true
}) => {
  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      {hasBoxClass && (
        <div className={`input-box ${inputBoxClass}`}>
          {inputList.map(({ id, type, maxLength, minLength, required, placeholder, ...props }) => (
            <Input
              id={id}
              key={id}
              type={type}
              maxLength={maxLength}
              minLength={minLength}
              required={required}
              placeholder={placeholder}
              onChange={onChange}
              value={cardInfo[id]}
              {...props}
            />
          ))}
        </div>
      )}
      {!hasBoxClass && (
        <>
          {inputList.map(({ id, type, maxLength, minLength, required, placeholder, ...props }) => (
            <Input
              id={id}
              key={id}
              type={type}
              maxLength={maxLength}
              minLength={minLength}
              required={required}
              placeholder={placeholder}
              onChange={onChange}
              value={cardInfo[id]}
              {...props}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default InputContainer;
