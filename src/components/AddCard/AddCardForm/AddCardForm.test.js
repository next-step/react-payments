import { fireEvent, render } from "@testing-library/react";

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
    cardOwner: "",
    securityNumber: "",
    cardPassword: {
      firstField: "",
      secondField: "",
    },
    error: {
      expiryDate: false,
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

  it("카드 소유자 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeAddCardForm();

    expect(
      queryByLabelText("카드 소유자이름(선택)")
    ).toBeInTheDocument();
  });

  it("카드 비밀번호 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeAddCardForm();

    expect(queryByLabelText("카드 비밀번호")).toBeInTheDocument();
  });

  it("보안코드 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeAddCardForm();

    expect(queryByLabelText("보안코드(CVC/CVV)")).toBeInTheDocument();
  });
});
