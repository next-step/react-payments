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
});
