import { afterEach, describe, expect, it } from "vitest";
import PropTypes from "prop-types";
import { cleanup, render, screen } from "@testing-library/react";
import Card from ".";
import Form from "../../../utils/test/form";

Form.propTypes = {
  children: PropTypes.node,
};

describe("Card Form 테스트", () => {
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

  it("카드 번호 표시", () => {
    render(
      <Form>
        <Card />
      </Form>
    );

    const text = screen.getByText("1234 1234 **** ****");

    expect(text).toBeTruthy();
  });

  it("카드사 이름 표시", () => {
    render(
      <Form>
        <Card />
      </Form>
    );

    const text = screen.getByText("kb");

    expect(text).toBeTruthy();
  });
});

describe("Card props 테스트", () => {
  afterEach(cleanup);

  it("카드 이름 표시", () => {
    render(
      <Form>
        <Card name={"서재완"} />
      </Form>
    );

    const text = screen.getByText("서재완");

    expect(text).toBeTruthy();
  });

  it("카드 만료일 표시", () => {
    render(
      <Form>
        <Card year="23" month={"03"} />
      </Form>
    );

    const text = screen.getByText("03/23");

    expect(text).toBeTruthy();
  });

  it("카드 번호 표시", () => {
    render(
      <Form>
        <Card
          cardNumber1="4321"
          cardNumber2="4321"
          cardNumber3="4321"
          cardNumber4="4321"
        />
      </Form>
    );

    const text = screen.getByText("4321 4321 **** ****");

    expect(text).toBeTruthy();
  });

  it("카드사 이름 표시", () => {
    render(
      <Form>
        <Card cardCompany="master" />
      </Form>
    );

    const text = screen.getByText("master");

    expect(text).toBeTruthy();
  });
});

describe("빈 Card 테스트", () => {
  it("빈 카드 표시", () => {
    render(<Card empty />);
  });
});
