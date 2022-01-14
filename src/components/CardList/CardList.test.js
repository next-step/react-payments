import { render } from "@testing-library/react";

import CARDS from "../../../fixtures/cards";

import CardList from "./CardList";

describe("CardList", () => {
  const makeCardList = () => render(<CardList cards={CARDS} />);

  it("카드 리스트를 렌더링합니다", () => {
    const { queryAllByText, queryByText } = makeCardList();

    CARDS.forEach(({ name, number, owner, expiryDate, nickname }) => {
      expect(queryAllByText(name)).not.toHaveLength(0);
      expect(queryAllByText(owner)).not.toHaveLength(0);
      expect(queryAllByText(expiryDate)).not.toHaveLength(0);

      expect(queryByText(number)).not.toBeNull();
      expect(queryByText(nickname)).not.toBeNull();
    });
  });
});
