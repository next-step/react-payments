import { FormProvider, useForm } from "react-hook-form";
import { afterEach, describe, expect, it } from "vitest";
import PropTypes from "prop-types";
import { cleanup, render, screen } from "@testing-library/react";
import Card from ".";

const Form = (props) => {
  const { children } = props;
  const form = useForm({
    defaultValues: {
      name: "test",
      year: "21",
      month: "12",
    },
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};

Form.propTypes = {
  children: PropTypes.node,
};

describe("Card 테스트", () => {
  afterEach(cleanup);

  it("카드 이름 표시", () => {
    render(
      <Form>
        <Card />
      </Form>
    );

    const text = screen.getByText("test");

    expect(text).toBeTruthy();
  });

  it("카드 만료일 표시", () => {
    render(
      <Form>
        <Card />
      </Form>
    );

    const text = screen.getByText("12/21");

    expect(text).toBeTruthy();
  });
});
