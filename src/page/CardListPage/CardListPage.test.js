import { fireEvent, render } from "@testing-library/react";

import CardListPage from "./CardListPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate() {
    return mockNavigate;
  },
}));

describe("CardListPage", () => {
  const makeCardListPage = () => render(<CardListPage />);

  it("페이지 타이틀을 표시합니다", () => {
    const { queryByText } = makeCardListPage();

    expect(queryByText("보유카드")).toBeInTheDocument();
  });

  it("카드 추가 버튼을 렌더링합니다", () => {
    const { queryByRole } = makeCardListPage();

    expect(
      queryByRole("button", {
        name: "카드 추가",
      })
    ).toBeInTheDocument();
  });

  it("카드 추가 버튼을 클릭하면 카드 추가 페이지로 이동합니다", () => {
    const { getByRole } = makeCardListPage();

    fireEvent.click(
      getByRole("button", {
        name: "카드 추가",
      })
    );

    expect(mockNavigate).toBeCalledWith("/add/card");
  });
});
