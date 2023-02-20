import Input from './Common/Input';

const InputContainer = ({
  title,
  inputList,
  cardInfo,
  onChange,
  inputBoxClass = '',
  hasBoxClass = true,
}) => {
  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      {hasBoxClass && (
        <div className={`input-box ${inputBoxClass}`}>
          {inputList.map(
            ({ id, type, maxLength, required, placeholder, ...props }, idx) => (
              <Input
                id={id}
                key={idx}
                type={type}
                maxLength={maxLength}
                required={required}
                placeholder={placeholder}
                onChange={onChange}
                value={cardInfo[id]}
                {...props}
              />
            )
          )}
        </div>
      )}
      {!hasBoxClass && (
        <>
          {inputList.map(
            ({ id, type, maxLength, required, placeholder, ...props }) => (
              <Input
                id={id}
                key={id}
                type={type}
                maxLength={maxLength}
                required={required}
                placeholder={placeholder}
                onChange={onChange}
                value={cardInfo[id]}
                {...props}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

//1. input값 유효성 평가
//2. input 내역 정리하기..

export default InputContainer;
