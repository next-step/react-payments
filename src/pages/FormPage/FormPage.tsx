import { useEffect } from 'react';
import styled from 'styled-components';
import { CompanyList } from 'components/CompanyList/CompanyList';
import Card from 'components/common/Card/Card';
import CardNumberInput from 'components/CardForm/CardNumberInput/CardNumberInput';
import CardExpirationDateInput from 'components/CardForm/CardExpirationDateInput/CardExpirationDateInput';
import CardOwnerNameInput from 'components/CardForm/CardOwnerNameInput/CardOwnerNameInput';
import CardPasswordInput from 'components/CardForm/CardPasswordInput/CardPasswordInput';
import CardSecurityInput from 'components/CardForm/CardSecurity/CardSecurity';
import IconButton from 'components/common/IconButton/IconButton';
import Text from 'components/common/Text/Text';
import { Button } from 'components/common/Button/Button';
import { VirtualKeyBoard } from 'components/common/VirtualKeyBoard';

import useFormPage from 'hooks/useFormPage';
import useFormInput from 'hooks/useFormInput';
import useHandleCardUI from 'hooks/useHandleCardUI';
import useToggle from 'hooks/useToggle';
import { getCardCompnayColor } from 'utils/Card';
import { isValidCardNumber, isValidExpirationDate, isValidCompany } from 'utils/InputValidation';

const FormPage = () => {
  const { isOpen, setIsOpen } = useToggle();
  const { cardUI, setCardUI } = useHandleCardUI();
  const cardUIState = {
    state: cardUI,
    setState: setCardUI,
  };

  const { cardFormInputs, handleCardNumberInput, handleExpireMonthInput, handleExpireYearInput, handleOwnerNameInput } =
    useFormInput(cardUIState);

  const { handleCompanyList, handleBackButton, handleSubmit } = useFormPage({
    ...cardUIState,
    formRefs: cardFormInputs,
  });

  useEffect(() => {
    if (isValidCompany(cardUI.company)) {
      setIsOpen(false);
    }
  }, [cardUI.company]);

  const cardColor = getCardCompnayColor(cardUI.company);

  return (
    <Layout>
      <Header>
        <IconButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
        <Text fontSize="lg" weight="bold" label="카드추가" />
      </Header>
      <div>
        {isOpen && <CompanyList onSelect={handleCompanyList} onClose={setIsOpen} />}
        <Card
          type="primary"
          onClick={() => setIsOpen(true)}
          color={cardColor}
          company={cardUI.company}
          size="small"
          number={cardUI.cardNumbers}
          expireMonth={cardUI.expireDateMonth}
          expireYear={cardUI.expireDateYear}
          ownerName={cardUI.ownerName}
        />
        <CardNumberInput
          onChange={handleCardNumberInput}
          isValid={cardUI.cardNumbers.length === 0 ? true : isValidCardNumber(cardUI.cardNumbers)}
          fontColor={cardColor}
          refs={cardFormInputs}
        />
        <CardExpirationDateInput
          onChangeMonth={handleExpireMonthInput}
          onChangeYear={handleExpireYearInput}
          fontColor={cardColor}
          refs={cardFormInputs}
          isValidMonth={cardUI.expireDateMonth.length === 0 ? true : isValidExpirationDate(cardUI.expireDateMonth)}
          isValidYear={cardUI.expireDateYear.length === 0 ? true : isValidExpirationDate(cardUI.expireDateYear)}
        />
        <CardOwnerNameInput
          onChange={handleOwnerNameInput}
          fontColor={cardColor}
          refs={cardFormInputs}
          length={cardUI.ownerName.length}
        />
        <VirtualKeyBoard refs={cardFormInputs} />
        <CardSecurityInput fontColor={cardColor} refs={cardFormInputs} />
        <CardPasswordInput fontColor={cardColor} refs={cardFormInputs} />
        <ButtonBox>
          <Button fontSize="m" onClick={handleSubmit} label="Next" />
        </ButtonBox>
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

export default FormPage;
