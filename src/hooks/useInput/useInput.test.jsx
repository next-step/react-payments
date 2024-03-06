import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import FormProvider from "../useFormProvider";
import useCustomForm from "../useForm";
import PropTypes from "prop-types";
import useInput from ".";

const Form = (props) => {
  const { children } = props;
  const form = useCustomForm();

  return <FormProvider {...form}>{children}</FormProvider>;
};

Form.propTypes = {
  children: PropTypes.node,
};

const Input = (props) => {
  const { name, max, min, maxLength, digit } = props;
  const input = useInput({ name, max, min, maxLength, digit });

  return <input {...input} />;
};

Input.propTypes = {
  name: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  maxLength: PropTypes.number,
  digit: PropTypes.shape({
    length: PropTypes.string,
    fill: PropTypes.string,
    pad: PropTypes.string,
  }),
};

describe("Input 기능 테스트", () => {
  afterEach(cleanup);

  it("문자 길이 제한 가능", () => {
    render(
      <Form>
        <Input maxLength={5} name={"length_string"} />
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
        <Input min={1} max={12} name={"period_number"} />
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
