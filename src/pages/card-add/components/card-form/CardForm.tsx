import ButtonBox from '@/components/common/button-box/ButtonBox';
import InputBox from '@/components/common/input-box/InputBox';
import Container from '@/components/common/input-container/Container';
import CardExpirationDate from './card-expiration-date/CardExpirationDate';
import CardNumbers from './card-numbers/CardNumbers';
import CardOwner from './card-owner/CardOwner';
import CardPassword from './card-password/CardPassword';
import CardSecurityCode from './card-security-code/CardSecurityCode';

import Button from '@/components/common/button/Button';

import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import useStepContext from '@/provider/step-provider/useStepContext';
import useInputFocus from '../../hook/useInputFocus';
import useModalContext from '@/provider/modal-provider/hook/useModalContext';
import {isObjectFailed} from '@/domain/validate';

const REF_SIZE = 3;
const CardForm = () => {
  const {inputRef} = useInputFocus(REF_SIZE);
  const [expirationDate, ownerName, password] = inputRef;

  const {cardValidation} = useCardContext();
  const {navigate} = useStepContext();
  const {
    cardBrand: {cardBrandName, color},
  } = useModalContext();
  const goToPage = () => {
    const isValid = cardValidation();
    const isCardBrandVaild = isObjectFailed({cardBrandName, color});
    if (isValid && isCardBrandVaild) {
      navigate('COMPLETE');
    }
  };

  return (
    <>
      <Container title='카드 번호'>
        <InputBox>
          <CardNumbers nextFocus={expirationDate} />
        </InputBox>
      </Container>
      <Container title='만료일'>
        <InputBox className='w-50'>
          <CardExpirationDate nextFocus={ownerName} ref={expirationDate} />
        </InputBox>
      </Container>
      <Container>
        <CardOwner ref={ownerName} />
      </Container>
      <Container title='보안코드(CVC/CVV)'>
        <CardSecurityCode nextFocus={password} />
      </Container>
      <Container title='카드 비밀번호'>
        <CardPassword ref={password} />
      </Container>
      <ButtonBox>
        <Button type='button' className='button-text button-border-none' onClick={goToPage}>
          <span className='button-text'>다음</span>
        </Button>
      </ButtonBox>
    </>
  );
};

export default CardForm;
