import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const handleClick = jest.fn();

  it("Button을 렌더링합니다", () => {
    const { queryByRole } = render(
      <Button onClick={handleClick}>다음</Button>
    );

    expect(
      queryByRole("button", {
        name: "다음",
      })
    ).toBeInTheDocument();
  });

  it("Button을 클릭하면 click 이벤트 핸들러를 실행합니다", () => {
    const { queryByRole } = render(
      <Button onClick={handleClick}>다음</Button>
    );

    fireEvent.click(
      queryByRole("button", {
        name: "다음",
      })
    );

    expect(handleClick).toBeCalled();
  });
});
