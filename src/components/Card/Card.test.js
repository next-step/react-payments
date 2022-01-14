import { render } from "@testing-library/react";

import * as fixtures from "../../../fixtures/cards";

import Card from "./Card";

describe("Card", () => {
  const CARD = {
    ...fixtures.CARD,
    nickname: "엄카",
  };

  const makeCard = () => render(<Card card={CARD} />);

  it("카드를 별칭을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("엄카")).toBeInTheDocument();
  });
});
