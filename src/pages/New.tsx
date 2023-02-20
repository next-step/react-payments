import { useNavigate } from 'react-router-dom';
import Card from 'src/components/Card';
import CardPasswordInput from 'src/components/CardPasswordInput';
import Header from 'src/components/Header';
import Input from 'src/components/Input';
import TextButton from 'src/components/TextButton';
import useNewCardForm from 'src/hooks/useNewCardForm';

const New = () => {
  const navigate = useNavigate();
  const {
    state,
    creditNumberHandler,
    expirationDateHandler,
    customerNameHandler,
    cvcHandler,
    password0Handler,
    password1Handler,
  } = useNewCardForm();
  const goNextPage = () => {
    navigate('/alias', { replace: true });
  };
  return (
    <>
      <Header
        title="카드 추가"
        hasBackButton
        backButtonPress={() => navigate(-1)}
      />
      <Card cardInfo={{ ...state }} />
      <Input
        label="카드 번호"
        widthSize="lg"
        value={state.creditNumber}
        onChange={creditNumberHandler}
        maxLength={19}
      />
      <Input
        label="만료일"
        widthSize="md"
        placeholder="MM / YY"
        value={state.expirationDate}
        onChange={expirationDateHandler}
        maxLength={5}
      />
      <Input
        label="카드 소유자 이름(선택)"
        textAlign="left"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        id="input-customer-name"
        value={state.customerName}
        onChange={customerNameHandler}
        hasInputCount
        inputCount={state.customerName.length}
        maxLength={30}
      />
      <Input
        label="보안 코드(CVC/CVV)"
        widthSize="sm"
        type="password"
        value={state.cvc}
        onChange={cvcHandler}
        maxLength={3}
      />
      <CardPasswordInput
        label="카드 비밀번호"
        password0={state.password0}
        password1={state.password1}
        password0Handler={password0Handler}
        password1Handler={password1Handler}
      />
      <TextButton text="다음" onClick={goNextPage} />
    </>
  );
};

export default New;
