import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import PropTypes from "prop-types";
import Funnel from ".";

const StepChild = (props) => {
  const { update, back, next, nextStep, children } = props;

  return (
    <div>
      {children}
      <button onClick={() => update(nextStep)}>update</button>
      <button onClick={() => back()}>back</button>
      <button onClick={() => next()}>next</button>
    </div>
  );
};

StepChild.propTypes = {
  update: PropTypes.func,
  back: PropTypes.func,
  next: PropTypes.func,
  nextStep: PropTypes.string,
  children: PropTypes.node,
};

describe("useFunnel 상태 변경 테스트", () => {
  afterEach(cleanup);

  it("현재 패널 반환", () => {
    render(
      <Funnel steps={["1단계", "2단계", "3단계"]}>
        <Funnel.Step name="1단계">
          <StepChild nextStep={"2단계"}>1</StepChild>
        </Funnel.Step>
        <Funnel.Step name="2단계">
          <StepChild nextStep={"3단계"}>2</StepChild>
        </Funnel.Step>
        <Funnel.Step name="3단계">
          <StepChild nextStep={"1단계"}>3</StepChild>
        </Funnel.Step>
      </Funnel>
    );

    const currentStep = screen.getByText("1");

    expect(currentStep).toBeTruthy();
  });

  it("특정 패널으로 이동", async () => {
    render(
      <Funnel steps={["1단계", "2단계", "3단계"]}>
        <Funnel.Step name="1단계">
          <StepChild nextStep={"2단계"}>1</StepChild>
        </Funnel.Step>
        <Funnel.Step name="2단계">
          <StepChild nextStep={"3단계"}>2</StepChild>
        </Funnel.Step>
        <Funnel.Step name="3단계">
          <StepChild nextStep={"1단계"}>3</StepChild>
        </Funnel.Step>
      </Funnel>
    );

    const updateButton = screen.getByText("update");
    fireEvent.click(updateButton);

    await waitFor(() => {
      expect(screen.getByText("2")).toBeTruthy();
    });
  });

  it("이전 패널으로 이동", () => {
    render(
      <Funnel steps={["1단계", "2단계", "3단계"]}>
        <Funnel.Step name="1단계">
          <StepChild nextStep={"2단계"}>1</StepChild>
        </Funnel.Step>
        <Funnel.Step name="2단계">
          <StepChild nextStep={"3단계"}>2</StepChild>
        </Funnel.Step>
        <Funnel.Step name="3단계">
          <StepChild nextStep={"1단계"}>3</StepChild>
        </Funnel.Step>
      </Funnel>
    );

    const updateButton = screen.getByText("update");
    fireEvent.click(updateButton);

    waitFor(() => {
      expect(screen.getByText("back")).toBeInTheDocument();
    });

    const backButton = screen.getByText("back");
    fireEvent.click(backButton);

    waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  it("다음 패널로 이동", () => {
    render(
      <Funnel steps={["1단계", "2단계", "3단계"]}>
        <Funnel.Step name="1단계">
          <StepChild nextStep={"2단계"}>1</StepChild>
        </Funnel.Step>
        <Funnel.Step name="2단계">
          <StepChild nextStep={"3단계"}>2</StepChild>
        </Funnel.Step>
        <Funnel.Step name="3단계">
          <StepChild nextStep={"1단계"}>3</StepChild>
        </Funnel.Step>
      </Funnel>
    );

    const updateButton = screen.getByText("next");
    fireEvent.click(updateButton);

    const currentStep = screen.getByText("2");
    expect(currentStep).toBeTruthy();
  });
});
