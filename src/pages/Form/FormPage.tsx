import { useEffect } from 'react';
import * as Styled from './FormPage.styles';

import useFormPage from 'hooks/useFormPage';
import useFormInput from 'hooks/useFormInput';
import useHandleCardUI from 'hooks/useHandleCardUI';
import useToggle from 'hooks/useToggle';
import { getCardCompnayColor } from 'utils/Card';
import { isValidCompany } from 'utils/InputValidation';
import { CompanyList } from 'components/CompanyList/CompanyList';
import { CardForm } from 'components/CardForm';

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
    <Styled.Layout>
      <Styled.Header>
        <Styled.LeftButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
        <Styled.FormPageText fontSize="lg" weight="bold" label="카드추가" />
      </Styled.Header>
      <div>
        {isOpen && <CompanyList onSelect={handleCompanyList} onClose={setIsOpen} />}
        <Styled.FormPageCard
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
        <CardForm
          cardUI={cardUI}
          refs={cardFormInputs}
          onCardNumberInput={handleCardNumberInput}
          onExpireMonthInput={handleExpireMonthInput}
          onExpireYearInput={handleExpireYearInput}
          onOwnerNameInput={handleOwnerNameInput}
        />
        <Styled.ButtonBox>
          <Styled.NextButton fontSize="m" onClick={handleSubmit} label="Next" />
        </Styled.ButtonBox>
      </div>
    </Styled.Layout>
  );
};

export default FormPage;
