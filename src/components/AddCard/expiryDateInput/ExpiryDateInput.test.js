import { fireEvent, render } from "@testing-library/react";
import { EXPIRY_DATE_LABEL } from "../constants";

import ExpiryDateInput from "../ExpiryDateInput";

describe("ExpiryDateInput", () => {
  const handleChange = jest.fn();

  const initialFields = {
    monthField: "",
    yearField: "",
  };

  const makeExpiryDateInput = (fields = initialFields) =>
    render(<ExpiryDateInput fields={fields} onChange={handleChange} />);

  it("만료일을 렌더링합니다", () => {
    const { queryByLabelText } = makeExpiryDateInput();

    expect(queryByLabelText("만료일")).toBeInTheDocument();
    expect(queryByLabelText("월 2자리")).toBeInTheDocument();
    expect(queryByLabelText("연도 2자리")).toBeInTheDocument();
  });

  it("만료일값을 변경하면 onChange 이벤트 핸들러를 실행합니다", () => {
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
        maxLength: 2,
        key: "expiryDate",
        name,
        value,
      });
    });
  });
});
