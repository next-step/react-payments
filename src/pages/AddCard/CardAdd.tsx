import { Fragment } from 'react/jsx-runtime';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import useCardNumber from './hooks/useCardNumber';

const AddCard = () => {
  const { cardNumber, handleNumbers } = useCardNumber();

  const card = {
    numbers: Object.values(cardNumber),
  };

  return (
    <>
      <Header className='mb-10'>
        <a>{'<'}&nbsp;</a>
        <span>카드추가</span>
      </Header>
      <Card {...card} />
      <InputContainer label='카드 번호'>
        <div className='input-box'>
          {Object.entries(cardNumber).map(([key, value], index) => {
            return (
              <Fragment key={key}>
                <Input
                  type={index > 1 ? 'password' : 'text'}
                  name={key}
                  onChange={handleNumbers}
                  value={cardNumber[key]}
                />
                {value.length === 4 && index < 3 && <span>-</span>}
              </Fragment>
            );
          })}
        </div>
      </InputContainer>
      <InputContainer label='만료일' className='w-50'>
        <div className='input-box'>
          <Input placeholder='MM' />
          <span>/</span>
          <Input placeholder='YY' />
        </div>
      </InputContainer>
      <InputContainer label='카드 소유자 이름(선택)'>
        <Input placeholder='카드에 표시된 이름과 동일하게 입력하세요.' />
      </InputContainer>
      <InputContainer label='보안코드'>
        <Input className='w-25' type='password' />
      </InputContainer>

      <InputContainer label='카드 비밀번호'>
        <div style={{ display: 'flex', gap: 6 }}>
          <Input className='w-15' type='password' />
          <Input className='w-15' type='password' />
        </div>
      </InputContainer>

      <div className='button-box'>
        <Button>다음</Button>
      </div>
    </>
  );
};

export default AddCard;
