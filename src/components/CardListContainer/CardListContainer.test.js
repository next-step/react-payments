import { render } from "@testing-library/react";

import CardListContainer from "./CardListContainer";

describe("CardListContainer", () => {
  it("페이지 타이틀을 표시합니다", () => {
    const { queryByText } = render(<CardListContainer />);

    expect(queryByText("보유카드")).toBeInTheDocument();
  });
});
