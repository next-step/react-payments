import { fireEvent, render } from "@testing-library/react";

import { EXPIRY_DATE_LABEL } from "../constants";

import ExpiryDateInput from "../ExpiryDateInput";

import VALIDATIONS from "../validations";

describe("ExpiryDateInput", () => {
  const handleChange = jest.fn();
  const handleErrorChange = jest.fn();

  const initialFields = {
    monthField: "",
    yearField: "",
  };

  const makeExpiryDateInput = ({
    fields = initialFields,
    error = false,
  } = {}) =>
    render(
      <ExpiryDateInput
        fields={fields}
        onChange={handleChange}
        onErrorChange={handleErrorChange}
        error={error}
      />
    );

  it("만료일을 렌더링합니다", () => {
    const { queryByLabelText } = makeExpiryDateInput();

    expect(queryByLabelText("만료일")).toBeInTheDocument();
    expect(queryByLabelText("월 2자리")).toBeInTheDocument();
    expect(queryByLabelText("연도 2자리")).toBeInTheDocument();
  });

  context("input 값으로 숫자를 입력했을 경우", () => {
    it("onChange 이벤트 핸들러를 실행합니다", () => {
      const { getByLabelText } = makeExpiryDateInput();

      const labels = [
        {
          label: EXPIRY_DATE_LABEL.month,
          name: "monthField",
          value: "11",
        },
        {
          label: EXPIRY_DATE_LABEL.year,
          name: "yearField",
          value: "25",
        },
      ];

      labels.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: {
            value,
          },
        });

        expect(handleChange).toBeCalledWith({
          key: "expiryDate",
          name,
          value,
        });
      });
    });
  });

  context("input 값으로 숫자를 입력하지 않았을 경우", () => {
    it("onChange 이벤트 핸들러를 실행하지 않습니다", () => {
      const { getByLabelText } = makeExpiryDateInput();

      const labels = [
        {
          label: EXPIRY_DATE_LABEL.month,
          name: "monthField",
          value: "STRING",
        },
        {
          label: EXPIRY_DATE_LABEL.year,
          name: "yearField",
          value: "STRING",
        },
      ];

      labels.forEach(({ label, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: {
            value,
          },
        });

        expect(handleChange).not.toBeCalled();
      });
    });
  });

  context("만료일 월 Input 값이 1이상 12이하인 경우", () => {
    it("에러가 발생하지 않습니다", () => {
      const { getByLabelText } = makeExpiryDateInput();

      fireEvent.change(getByLabelText(EXPIRY_DATE_LABEL.month), {
        target: {
          value: "1",
        },
      });

      expect(handleErrorChange).toBeCalledWith({
        key: "expiryDate",
        error: false,
      });
    });
  });

  context("만료일 월 Input 값이 1이상 12이하가 아닌 경우", () => {
    it("에러가 발생합니다", () => {
      const { getByLabelText } = makeExpiryDateInput();

      fireEvent.change(getByLabelText(EXPIRY_DATE_LABEL.month), {
        target: {
          value: "0",
        },
      });

      expect(handleErrorChange).toBeCalledWith({
        key: "expiryDate",
        error: true,
      });
    });
  });

  context("error가 발생한 경우", () => {
    it("error message를 화면에 표시합니다", () => {
      const { queryByText } = makeExpiryDateInput({
        error: true,
      });

      expect(
        queryByText(VALIDATIONS.expiryDateMonth)
      ).toBeInTheDocument();
    });
  });

  context("error가 발생하지 않은 경우", () => {
    it("error message를 화면에 표시하지 않습니다", () => {
      const { queryByText } = makeExpiryDateInput({
        error: false,
      });

      expect(
        queryByText(VALIDATIONS.expiryDateMonth)
      ).not.toBeInTheDocument();
    });
  });
});
