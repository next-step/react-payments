import { Fragment } from 'react/jsx-runtime';
import type { Card as CardType } from '../../types';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import useCardNumber from './hooks/useCardNumber';
import useExpiration from './hooks/useExpiration';
import useSecurityCode from './hooks/useSecurityCode';
import usePassword from './hooks/usePassword';

const AddCard = () => {
  const { cardNumber, handleNumbers } = useCardNumber();
  const { expirationDate, handleExpirationDate } = useExpiration();
  const { securityCode, handleSecurityCode } = useSecurityCode();
  const { password, handlePassword } = usePassword();

  const card: CardType = {
    numbers: Object.values(cardNumber),
    expirationMonth: expirationDate.month,
    expirationYear: expirationDate.year,
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
          {Object.entries(cardNumber).map(([key, value], index) => (
            <Fragment key={key}>
              <Input
                type={index > 1 ? 'password' : 'text'}
                name={key}
                onChange={handleNumbers}
                value={cardNumber[key]}
              />
              {value.length === 4 && index < 3 && <span>-</span>}
            </Fragment>
          ))}
        </div>
      </InputContainer>

      <InputContainer label='만료일' className='w-50'>
        <div className='input-box'>
          <Input
            name='month'
            placeholder='MM'
            value={expirationDate.month}
            onChange={handleExpirationDate}
          />
          <span>/</span>
          <Input
            name='year'
            placeholder='YY'
            value={expirationDate.year}
            onChange={handleExpirationDate}
          />
        </div>
      </InputContainer>

      <InputContainer label='카드 소유자 이름(선택)'>
        <Input placeholder='카드에 표시된 이름과 동일하게 입력하세요.' />
      </InputContainer>

      <InputContainer label='보안코드'>
        <Input
          className='w-25'
          type='password'
          value={securityCode}
          onChange={handleSecurityCode}
        />
      </InputContainer>

      <InputContainer label='카드 비밀번호'>
        <div style={{ display: 'flex', gap: 6 }}>
          <Input
            className='w-15'
            type='password'
            name='first'
            value={password.first}
            onChange={handlePassword}
          />
          <Input
            className='w-15'
            type='password'
            name='second'
            value={password.second}
            onChange={handlePassword}
          />
          <div className='flex-center w-15'>•</div>
          <div className='flex-center w-15'>•</div>
        </div>
      </InputContainer>

      <div className='button-box'>
        <Button>다음</Button>
      </div>
    </>
  );
};

export default AddCard;
