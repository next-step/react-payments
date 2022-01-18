import { render } from "@testing-library/react";

import InputGroup from "./InputGroup";

describe("InputGroup", () => {
  const makeInputGroup = ({ separator = "" } = {}) =>
    render(
      <InputGroup separator={separator}>
        <input placeholder="테스트 인풋" />
      </InputGroup>
    );

  it("자식 컴포넌트를 렌더링합니다", () => {
    const { queryByPlaceholderText } = makeInputGroup();

    expect(queryByPlaceholderText("테스트 인풋")).toBeInTheDocument();
  });

  it("구분자를 렌더링합니다", () => {
    const { queryByText } = makeInputGroup({
      separator: "/",
    });

    expect(queryByText("/")).toBeInTheDocument();
  });
});
