import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PropTypes from "prop-types";
import useModal from ".";

const ChildModal = (props) => {
  const { toggleModal } = props;

  return (
    <div>
      <button onClick={toggleModal}>닫기</button>
    </div>
  );
};

ChildModal.propTypes = {
  toggleModal: PropTypes.func,
};

describe("useModal 테스트", () => {
  it("Modal 표시", () => {
    const { result: Result } = renderHook(() => useModal());

    render(
      <Result.current.Modal>
        <div>모달</div>
      </Result.current.Modal>
    );

    const textBeforeToggle = screen.queryByText("모달");
    expect(textBeforeToggle).toBeNull();

    act(() => {
      Result.current.toggleModal();
    });

    waitFor(() => {
      const text = screen.getByText("모달");
      expect(text).toBeTruthy();
    });
  });

  it("Modal toggle 전달 확인", () => {
    const { result: Result } = renderHook(() => useModal());

    render(
      <Result.current.Modal>
        <ChildModal />
      </Result.current.Modal>
    );

    act(() => {
      Result.current.toggleModal();
    });

    waitFor(() => {
      const text = screen.getByText("닫기");
      fireEvent.click(text);
    });

    waitFor(() => {
      const textAfterToggle = screen.queryByText("닫기");
      expect(textAfterToggle).toBeNull();
    });
  });
});
