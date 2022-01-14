import { render } from "@testing-library/react";

import AddCardButton from "./AddCardButton";

describe("AddCardButton", () => {
  const makeAddCardButton = () => render(<AddCardButton />);

  it("카드 추가 버튼을 렌더링합니다", () => {
    const { queryByRole } = makeAddCardButton();

    expect(
      queryByRole("button", {
        name: "카드 추가",
      })
    ).toBeInTheDocument();
  });
});
