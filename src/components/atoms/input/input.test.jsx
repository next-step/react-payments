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
});
