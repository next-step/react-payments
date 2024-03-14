import Container from '@/components/common/input-container/Container';
import CardExpirationDate from './card-expiration-date/CardExpirationDate';
import CardNumbers from './card-numbers/CardNumbers';
import CardOwner from './card-owner/CardOwner';
import CardPassword from './card-password/CardPassword';
import CardSecurityCode from './card-security-code/CardSecurityCode';
import InputBox from '@/components/common/input-box/InputBox';
import ButtonBox from '@/components/common/button-box/ButtonBox';

import { StepContext } from '@/provider/step-provider/StepProvider';
import { useContext } from 'react';
import Button from '@/components/common/button/Button';

const CardForm = () => {
  const { navigate } = useContext(StepContext);
  // const { toggle } = useContext(ModalContext);
  const goToPage = () => {
    navigate('COMPLETE');
  };
  return (
    <>
      <Container title="카드 번호">
        <InputBox>
          <CardNumbers />
        </InputBox>
      </Container>
      <Container title="만료일">
        <InputBox className="w-50">
          <CardExpirationDate />
        </InputBox>
      </Container>
      <Container>
        <CardOwner />
      </Container>
      <Container title="보안코드(CVC/CVV)">
        <CardSecurityCode />
      </Container>
      <Container title="카드 비밀번호">
        <CardPassword />
      </Container>
      <ButtonBox>
        <Button type="button" className="button-text button-border-none" onClick={goToPage}>
          <span className="button-text">다음</span>
        </Button>
      </ButtonBox>
    </>
  );
};

export default CardForm;
