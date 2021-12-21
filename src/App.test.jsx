import App from "./App";

import { render } from "@testing-library/react";

describe("App", () => {
  it("APP 컴포넌트를 렌더링합니다", () => {
    const { getByText } = render(<App />);

    expect(getByText("APP")).toBeInTheDocument();
  });
});
