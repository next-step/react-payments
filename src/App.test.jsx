import { MemoryRouter } from "react-router-dom";

import App from "./App";

import { render } from "@testing-library/react";

describe("App", () => {
  it("보유카드 페이지를 렌더링합니다", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(getByText("보유카드")).toBeInTheDocument();
  });
});
