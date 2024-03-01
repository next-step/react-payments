import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { FormProvider, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Input from ".";

const Form = (props) => {
  const { children } = props;
  const form = useForm();

  return <FormProvider {...form}>{children}</FormProvider>;
};

Form.propTypes = {
  children: PropTypes.node,
};

describe("Input 입력 테스트", () => {
  afterEach(cleanup);

  it("숫자만 입력 가능", () => {
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

  it("문자 길이 제한 가능", () => {
    render(
      <Form>
        <Input type={"text"} maxLength={5} name={"length_string"} />
      </Form>
    );

    const input = document.querySelector("input");
    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.change(input, { target: { value: "12" } });
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.change(input, { target: { value: "1234" } });
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.change(input, { target: { value: "123456" } });

    expect(input.value).toBe("12345");
  });

  it("숫자 범위 제한 가능", () => {
    render(
      <Form>
        <Input type={"number"} min={1} max={12} name={"period_number"} />
      </Form>
    );

    const input = document.querySelector("input");
    fireEvent.change(input, { target: { value: 20 } });

    expect(input.value).toBe("12");
  });

  it("숫자 자릿수 설정 가능", () => {
    render(
      <Form>
        <Input
          type="number"
          digit={{ length: "2", fill: "0", pad: "padStart" }}
          name={"digit_number"}
        />
      </Form>
    );

    const input = document.querySelector("input");
    fireEvent.change(input, { target: { value: 1 } });

    expect(input.value).toBe("01");
  });
});
