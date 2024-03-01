import { act, render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useFunnel from ".";

describe("useFunnel 상태 변경 테스트", () => {
  it("현재 패널 반환", () => {
    const { result: Result } = renderHook(() => useFunnel());

    render(
      <Result.current.Funnel>
        <Result.current.Funnel.Step name="1단계">1</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="2단계">2</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="3단계">3</Result.current.Funnel.Step>
      </Result.current.Funnel>
    );

    const currentStep = screen.getByText("1");

    expect(currentStep).toBeInTheDocument();
  });

  it("특정 패널으로 이동", () => {
    const { result: Result } = renderHook(() => useFunnel());

    render(
      <Result.current.Funnel>
        <Result.current.Funnel.Step name="1단계">1</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="2단계">2</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="3단계">3</Result.current.Funnel.Step>
      </Result.current.Funnel>
    );

    act(() => {
      Result.current.update("2단계");
    });

    const currentStep = screen.getByText("2");

    expect(currentStep).toBeInTheDocument();
  });

  it("이전 패널으로 이동", () => {
    const { result: Result } = renderHook(() => useFunnel());

    render(
      <Result.current.Funnel>
        <Result.current.Funnel.Step name="1단계">1</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="2단계">2</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="3단계">3</Result.current.Funnel.Step>
      </Result.current.Funnel>
    );

    act(() => {
      Result.current.update("2단계");
      Result.current.back();
    });

    const currentStep = screen.getByText("1");

    expect(currentStep).toBeInTheDocument();
  });

  it("다음 패널로 이동", () => {
    const { result: Result } = renderHook(() => useFunnel());

    render(
      <Result.current.Funnel>
        <Result.current.Funnel.Step name="1단계">1</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="2단계">2</Result.current.Funnel.Step>
        <Result.current.Funnel.Step name="3단계">3</Result.current.Funnel.Step>
      </Result.current.Funnel>
    );

    act(() => {
      Result.current.next();
    });

    const currentStep = screen.getByText("2");

    expect(currentStep).toBeInTheDocument();
  });
});
