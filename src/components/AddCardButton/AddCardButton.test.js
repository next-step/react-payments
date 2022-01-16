import { fireEvent, render } from "@testing-library/react";

import AddCardButton from "./AddCardButton";

describe("AddCardButton", () => {
  const handleClick = jest.fn();

  const makeAddCardButton = () =>
    render(<AddCardButton onClick={handleClick} />);

  it("카드 추가 버튼을 렌더링합니다", () => {
    const { queryByRole } = makeAddCardButton();

    expect(
      queryByRole("button", {
        name: "카드 추가",
      })
    ).toBeInTheDocument();
  });

  it("카드 추가 버튼을 클릭했을때 onClick 이벤트 핸들러를 실행합니다", () => {
    const { queryByRole } = makeAddCardButton();

    fireEvent.click(
      queryByRole("button", {
        name: "카드 추가",
      })
    );

    expect(handleClick).toBeCalled();
  });
});
