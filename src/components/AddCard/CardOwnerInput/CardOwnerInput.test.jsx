import { fireEvent, render } from "@testing-library/react";

import CardOwnerInput from "./CardOwnerInput";

describe("CardOwnerInput", () => {
  const MAX_LENGTH = 30;
  const CARD_OWNER = "HEAEUN";

  const handleChange = jest.fn();

  const makeCardOwnerInput = (value = "") =>
    render(<CardOwnerInput value={value} onChange={handleChange} />);

  it("카드 소유자 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeCardOwnerInput();

    expect(
      queryByLabelText("카드 소유자이름(선택)")
    ).toBeInTheDocument();
  });

  it("카드 소유자 Input 값의 길이를 렌더링합니다", () => {
    const { queryByText } = makeCardOwnerInput(CARD_OWNER);

    expect(
      queryByText(`${CARD_OWNER.length}/${MAX_LENGTH}`)
    ).toBeInTheDocument();
  });

  it("카드 소유자 Input을 값이 변경되면 change 이벤트 핸들러가 실행됩니다", () => {
    const { getByLabelText } = makeCardOwnerInput();

    fireEvent.change(getByLabelText("카드 소유자이름(선택)"), {
      target: {
        value: CARD_OWNER,
      },
    });

    expect(handleChange).toBeCalledWith({
      name: "cardOwner",
      value: CARD_OWNER,
    });
  });
});
