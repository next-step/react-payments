import CardExpirationDate from './card-expiration-date/CardExpirationDate';
import CardNumbers from './card-numbers/CardNumbers';
import CardOwner from './card-owner/CardOwner';
import CardPassword from './card-password/CardPassword';
import CardSecurityCode from './card-security-code/CardSecurityCode';
import { ButtonBox, Container, InputBox } from '@/components/common';

import { isObjectFailed } from '@/domain/validate';

import useCardContext from '@/provider/card-info-provider/hooks/useCardContext';
import useModalContext from '@/provider/modal-provider/hooks/useModalContext';
import useStepContext from '@/provider/step-provider/hook/useStepContext';
import useInputFocus from '../../hook/useInputFocus';

const REF_SIZE = 3;
const CardForm = () => {
  const { cardValidation } = useCardContext();
  const { navigate } = useStepContext();
  const {
    cardBrand: { cardBrandName, color },
  } = useModalContext();

  const { inputRef } = useInputFocus(REF_SIZE);
  const [expirationDate, ownerName, password] = inputRef;

  const goToPage = () => {
    const isValid = cardValidation();
    const isCardBrandVaild = isObjectFailed({ cardBrandName, color });
    if (isValid && isCardBrandVaild) {
      navigate('COMPLETE');
    }
  };

  return (
    <>
      <Container title="카드 번호">
        <InputBox>
          <CardNumbers nextFocus={expirationDate} />
        </InputBox>
      </Container>
      <Container title="만료일">
        <InputBox className="w-50">
          <CardExpirationDate nextFocus={ownerName} ref={expirationDate} />
        </InputBox>
      </Container>
      <Container>
        <CardOwner ref={ownerName} />
      </Container>
      <Container title="보안코드(CVC/CVV)">
        <CardSecurityCode nextFocus={password} />
      </Container>
      <Container title="카드 비밀번호">
        <CardPassword ref={password} />
      </Container>
      <ButtonBox>
        <button type="button" className="button-text button-border-none" onClick={goToPage}>
          <span className="button-text">다음</span>
        </button>
      </ButtonBox>
    </>
  );
};

export default CardForm;
