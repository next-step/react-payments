import { render } from "@testing-library/react";

import isPublic from "./utils/isPublic";

import CardItem from "./CardItem";

describe("CardItem", () => {
  const CARDITEM = {
    name: "포코카드",
    number: "1111 2222 3333 4444",
    owner: "SUN",
    expiryDate: "04/21",
  };

  const makeCard = () => render(<CardItem cardItem={CARDITEM} />);

  it("카드 이름을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("포코카드")).toBeInTheDocument();
  });

  it("카드 번호를 앞 8자리만 숫자로 표시하고 나머지는 '●'로 표시합니다", () => {
    const { queryByText, queryAllByText } = makeCard();

    const numbers = CARDITEM.number.split(" ");

    for (const [index, text] of numbers.entries()) {
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
