import { fireEvent, render } from "@testing-library/react";

import CardNumberInput from "../CardNumberInput";

describe("CardNumberInput", () => {
  const handleChange = jest.fn();

  const initialFields = {
    firstField: "",
    secondField: "",
    thirdField: "",
    fourthField: "",
  };

  const makeCardNumberInput = (fields = initialFields) =>
    render(
      <CardNumberInput fields={fields} onChange={handleChange} />
    );

  it("카드 번호 Input 4개를 렌더링합니다", () => {
    const { queryByLabelText } = makeCardNumberInput();

    expect(
      queryByLabelText("첫번째 카드 번호 4자리")
    ).toBeInTheDocument();
    expect(
      queryByLabelText("두번째 카드 번호 4자리")
    ).toBeInTheDocument();
    expect(
      queryByLabelText("세번째 카드 번호 4자리")
    ).toBeInTheDocument();
    expect(
      queryByLabelText("네번째 카드 번호 4자리")
    ).toBeInTheDocument();
  });

  context("input 값으로 숫자를 입력했을 경우", () => {
    it("onChange 이벤트 핸들러를 실행합니다", () => {
      const { getByLabelText } = makeCardNumberInput();

      const labels = [
        {
          label: "첫번째 카드 번호 4자리",
          name: "firstField",
          value: "1111",
        },
        {
          label: "두번째 카드 번호 4자리",
          name: "secondField",
          value: "2222",
        },
        {
          label: "세번째 카드 번호 4자리",
          name: "thirdField",
          value: "3333",
        },
        {
          label: "네번째 카드 번호 4자리",
          name: "fourthField",
          value: "4444",
        },
      ];

      labels.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: {
            value,
          },
        });

        expect(handleChange).toBeCalledWith({
          key: "cardNumbers",
          name,
          value,
        });
      });
    });
  });

  context("input 값으로 숫자를 입력하지 않았을 경우", () => {
    it("onChange 이벤트 핸들러를 실행하지 않습니다", () => {
      const { getByLabelText } = makeCardNumberInput();

      const labels = [
        {
          label: "첫번째 카드 번호 4자리",
          name: "firstField",
          value: "aaaa",
        },
        {
          label: "두번째 카드 번호 4자리",
          name: "secondField",
          value: "bbbb",
        },
        {
          label: "세번째 카드 번호 4자리",
          name: "thirdField",
          value: "cccc",
        },
        {
          label: "네번째 카드 번호 4자리",
          name: "fourthField",
          value: "dddd",
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
});
