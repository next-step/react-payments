import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import useAddCardFormFields from "./hooks/useAddCardFormFields";

import AddCardForm from "../AddCardForm";

import { Title } from "../../style/layout";

import Card from "../../Card";

const AddCardContainer = () => {
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
        <button onClick={handleClick}>뒤로가기</button> 카드 추가
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

export default AddCardContainer;
