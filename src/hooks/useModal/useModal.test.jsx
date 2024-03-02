import { act, render, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useModal from ".";

describe("useModal 테스트", () => {
  it("Modal 표시", () => {
    const { result: Result } = renderHook(() => useModal());

    render(
      <Result.Modal>
        <div>모달</div>
      </Result.Modal>
    );

    const text = screen.getByText("모달");
    expect(!text).toBeTruthy();

    act(() => {
      Result.current.toggleModal();
    });

    waitFor(() => {
      const text = screen.getByText("모달");
      expect(text).toBeTruthy();
    });
  });
});
