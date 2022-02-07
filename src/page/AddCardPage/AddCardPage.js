import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import { MdOutlineArrowBackIosNew } from "react-icons/md";

import useAddCardFormFields from "./hooks/useAddCardFormFields";

import AddCardForm from "../../components/AddCard/AddCardForm";

import { Title } from "../../components/style/layout";

import Card from "../../components/Card";

const AddCardPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const {
    fields,
    handleChangeSingleInput,
    handleChangeMultipleInput,
    handleErrorChange,
  } = useAddCardFormFields();

  const {
    cardNumbers: { firstField, secondField },
    expiryDate: { yearField, monthField },
    cardOwner,
  } = fields;

  return (
    <>
      <Title>
        <PrevButton aria-label="뒤로가기" onClick={handleClick}>
          <MdOutlineArrowBackIosNew />
        </PrevButton>
        카드 추가
      </Title>
      <main>
        <FormCard
          data={{
            numbers: [firstField, secondField],
            expiryDate: `${monthField}/${yearField}`,
            owner: cardOwner,
          }}
        />
        <AddCardForm
          fields={fields}
          onChangeSingleInput={handleChangeSingleInput}
          onChangeMultipleInput={handleChangeMultipleInput}
          onErrorChange={handleErrorChange}
        />
      </main>
    </>
  );
};

const FormCard = styled(Card)`
  margin: 0 auto 40px;
`;

const PrevButton = styled.button`
  padding: 10px 10px 10px 0;
`;

export default AddCardPage;
