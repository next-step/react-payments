import { render } from "@testing-library/react";

import AddCardCompletePage from ".";

describe("AddCardCompletePage", () => {
  const makeAddCardCompletePage = () =>
    render(<AddCardCompletePage />);

  it("페이지 타이틀을 렌더링합니다", () => {
    const { queryByText } = makeAddCardCompletePage();

    expect(
      queryByText("카드등록이 완료되었습니다")
    ).toBeInTheDocument();
  });
});
