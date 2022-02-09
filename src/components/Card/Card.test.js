import { render } from "@testing-library/react";

import { CARD } from "../../../fixtures/cards";

import isPublic from "./utils/isPublic";

import Card from "./Card";

describe("Card", () => {
  const makeCard = () => render(<Card data={CARD} />);

  it("카드 이름을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("포코카드")).toBeInTheDocument();
  });

  it("카드 번호를 앞 8자리만 숫자로 표시하고 나머지는 '●'로 표시합니다", () => {
    const { queryByText, queryAllByText } = makeCard();

    for (const [index, text] of CARD.numbers.entries()) {
      if (!isPublic(index)) {
        return;
      }

      expect(queryByText(text)).toBeInTheDocument();
    }

    expect(queryAllByText("●●●●")).toHaveLength(2);
  });

  it("카드 소유자 이름을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("SUN")).toBeInTheDocument();
  });

  it("카드 만료일을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("04/21")).toBeInTheDocument();
  });
});
