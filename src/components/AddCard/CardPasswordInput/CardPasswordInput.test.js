import { fireEvent, render } from "@testing-library/react";

import CardPasswordInput from "./CardPasswordInput";

describe("CardPasswordInput", () => {
  const handleChange = jest.fn();

  const initialFields = {
    firstField: "",
    secondField: "",
  };

  const makeCardPasswordInput = (fields = initialFields) =>
    render(
      <CardPasswordInput fields={fields} onChange={handleChange} />
    );

  it("카드 비밀번호 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeCardPasswordInput();

    expect(queryByLabelText("카드 비밀번호")).toBeInTheDocument();
    expect(
      queryByLabelText("비밀번호 첫번째 자리")
    ).toBeInTheDocument();
    expect(
      queryByLabelText("비밀번호 두번째 자리")
    ).toBeInTheDocument();
  });

  it("만료일값을 변경하면 onChange 이벤트 핸들러를 실행합니다", () => {
    const { getByLabelText } = makeCardPasswordInput();

    const labels = [
      {
        label: "비밀번호 첫번째 자리",
        name: "firstField",
        value: "1",
      },
      {
        label: "비밀번호 두번째 자리",
        name: "secondField",
        value: "2",
      },
    ];

    labels.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: {
          value,
        },
      });

      expect(handleChange).toBeCalledWith({
        key: "cardPassword",
        name,
        value,
      });
    });
  });
});
