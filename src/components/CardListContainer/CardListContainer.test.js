import { render } from "@testing-library/react";

import CardListContainer from "./CardListContainer";

describe("CardListContainer", () => {
  const makeCardListContainer = () => render(<CardListContainer />);

  it("페이지 타이틀을 표시합니다", () => {
    const { queryByText } = makeCardListContainer();

    expect(queryByText("보유카드")).toBeInTheDocument();
  });

  it("카드 추가 버튼을 렌더링합니다", () => {
    const { queryByRole } = makeCardListContainer();

    expect(
      queryByRole("button", {
        name: "카드 추가",
      })
    ).toBeInTheDocument();
  });
});
