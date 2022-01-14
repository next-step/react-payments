import { render } from "@testing-library/react";

import { CARDS } from "../../../fixtures/cards";

import CardList from "./CardList";

describe("CardList", () => {
  const makeCardList = () => render(<CardList cards={CARDS} />);

  it("카드 리스트를 렌더링합니다", () => {
    const { queryAllByText } = makeCardList();

    CARDS.forEach(({ name }) => {
      expect(queryAllByText(name)).not.toHaveLength(0);
    });
  });

  it("카드 추가 버튼을 렌더링합니다", () => {
    const { queryByRole } = makeCardList();

    expect(
      queryByRole("button", {
        name: "카드 추가",
      })
    ).toBeInTheDocument();
  });
});
