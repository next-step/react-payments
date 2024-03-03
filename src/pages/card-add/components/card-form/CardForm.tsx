import Container from '@/components/common/input-container/Container';
import CardExpirationDate from './card-expiration-date/CardExpirationDate';
import CardNumbers from './card-numbers/CardNumbers';
import CardOwner from './card-owner/CardOwner';
import CardPassword from './card-password/CardPassword';
import CardSecurityCode from './card-security-code/CardSecurityCode';
import Form from '@/components/common/form/Form';

const CardForm = () => {
  return (
    <Form>
      <Container title="카드 번호">
        <CardNumbers />
      </Container>
      <Container title="만료일">
        <CardExpirationDate />
      </Container>
      <Container title="카드 소유자 이름(선택)">
        <CardOwner />
      </Container>
      <Container title="보안코드(CVC/CVV)">
        <CardSecurityCode />
      </Container>
      <Container title="카드 비밀번호">
        <CardPassword />
      </Container>
    </Form>
  );
};

export default CardForm;
