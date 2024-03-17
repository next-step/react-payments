import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Form from "../../../utils/test/form";
import SubmitCard from ".";

describe("Submit Card 테스트", () => {
  afterEach(cleanup);

  it("placeholder로 [카드 별칭 (선택)]이 존재한다.", async () => {
    render(
      <Form>
        <SubmitCard />
      </Form>
    );

    const input = await screen.findByPlaceholderText("카드 별칭 (선택)");

    expect(input).toBeTruthy();
  });

  it("입력은 최대 10자만 가능하다.", async () => {
    render(
      <Form>
        <SubmitCard />
      </Form>
    );

    const input = await screen.findByPlaceholderText("카드 별칭 (선택)");

    fireEvent.change(input, {
      target: {
        value: "1234567890",
      },
    });

    expect(input.value).toBe("1234567890");

    fireEvent.change(input, {
      target: {
        value: "12345678901",
      },
    });

    expect(input.value).toBe("1234567890");
  });

  it("빈 값을 입력하고 확인을 누르면 카드 이름이 별칭이 된다.", async () => {
    let submitData;
    const update = vi.fn();
    const setCardList = vi.fn((callback) => {
      const prev = [];

      submitData = callback(prev);
    });
    render(
      <Form>
        <SubmitCard setCardList={setCardList} update={update} />
      </Form>
    );

    const submitButton = await screen.findByText("다음");

    fireEvent.click(submitButton);

    expect(Object.values(submitData)[0].nickname).toBe("kb");
  });
});
