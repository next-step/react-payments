import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import PropTypes from "prop-types";
import Form from "../../../utils/test/form";
import Input from ".";

Form.propTypes = {
  children: PropTypes.node,
};

describe("Input 입력 테스트", () => {
  afterEach(cleanup);

  it("숫자만 입력 가능 가능하다", () => {
    render(
      <Form>
        <Input type={"number"} name={"number"} />
      </Form>
    );

    const input = document.querySelector("input");

    fireEvent.change(input, { target: { value: "문자" } });

    expect(input.value).toBe("");
  });

  it("* 처리 숫자만 입력 가능", () => {
    render(
      <Form>
        <Input type={"number"} secret={true} name={"secret_number"} />
      </Form>
    );

    const input = document.querySelector(".input-secret");

    expect(input).toBeTruthy();
  });

  // 비슷한 유형의 테스트를 다른 곳에서 작성했는데 또 할 필요가 있을까?
  it("특정 태그를 넣었을 때 해당 태그로 렌더링된다.", () => {
    render(
      <Form>
        <Input as="textarea" type={"number"} name={"number"} />
      </Form>
    );

    const input = document.querySelector("textarea");

    expect(input).toBeTruthy();
  });

  it("클래스를 넣었을 때 컴포넌트에 반영이 된다.", () => {
    render(
      <Form>
        <Input type={"number"} name={"number"} className="input" />
      </Form>
    );

    const input = document.querySelector(".input");

    expect(input).toBeTruthy();
  });

  it("여러 스타일 클래스를 적용할 수 있다.", () => {
    render(
      <Form>
        <Input
          type={"number"}
          name={"number"}
          className={["input", "number"]}
        />
      </Form>
    );

    const input = document.querySelector(".input.number");

    expect(input).toBeTruthy();
  });
});
