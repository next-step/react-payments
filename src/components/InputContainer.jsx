import Input from './Common/Input';
import styled from 'styled-components';

const Container = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  .input-title {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 4px;
    color: #525252;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputContainer = ({ title, inputList, cardInfo, onChange }) => {
  return (
    <Container>
      <label className="input-title">{title}</label>
      {inputList.length > 1 ? (
        <Box>
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
        </Box>
      ) : (
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
    </Container>
  );
};

export default InputContainer;
