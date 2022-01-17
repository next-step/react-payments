import { render } from "@testing-library/react";

import AddCardForm from "../AddCardForm";

describe("AddCardForm", () => {
  const handleChangeSingleInput = jest.fn();
  const handleChangeMultipleInput = jest.fn();

  const initialFields = {
    cardNumbers: {
      firstField: "",
      secondField: "",
      thirdField: "",
      fourthField: "",
    },
    expiryDate: {
      monthField: "",
      yearField: "",
    },
  };

  const makeAddCardForm = (fields = initialFields) =>
    render(
      <AddCardForm
        fields={fields}
        onChangeSingleInput={handleChangeSingleInput}
        handleChangeMultipleInput={handleChangeMultipleInput}
      />
    );

  it("카드 번호 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeAddCardForm();

    expect(queryByLabelText("카드 번호")).toBeInTheDocument();
  });

  it("만료일 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeAddCardForm();

    expect(queryByLabelText("만료일")).toBeInTheDocument();
  });

  it("보안코드 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeAddCardForm();

    expect(queryByLabelText("보안코드")).toBeInTheDocument();
  });
});
