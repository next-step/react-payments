import { render } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  const CARD = {
    id: 1,
    name: "포코카드",
    number: "1111 2222 **** ****",
    owner: "SUN",
    expiryDate: "04/21",
    nickname: "엄카",
  };

  const makeCard = () => render(<Card card={CARD} />);

  it("카드 이름을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("포코카드")).toBeInTheDocument();
  });

  it("카드 번호를 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("1111 2222 **** ****")).toBeInTheDocument();
  });

  it("카드 소유자 이름을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("SUN")).toBeInTheDocument();
  });

  it("카드 만료일을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("04/21")).toBeInTheDocument();
  });

  it("카드를 별칭을 표시합니다", () => {
    const { queryByText } = makeCard();

    expect(queryByText("엄카")).toBeInTheDocument();
  });
});
