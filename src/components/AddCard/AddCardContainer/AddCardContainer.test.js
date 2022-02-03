import { fireEvent, render } from "@testing-library/react";

import AddCardContainer from ".";

import { CARD_NUMBER_LABEL, EXPIRY_DATE_LABEL } from "../constants";

describe("AddCardContainer", () => {
  const makeAddCardContainer = () => render(<AddCardContainer />);

  it("페이지 타이틀을 렌더링합니다", () => {
    const { queryByRole } = makeAddCardContainer();

    expect(queryByRole("heading")).toHaveTextContent("카드 추가");
  });

  it("입력된 Input 값이 4자리면 다음 Input으로 focus가 이동됩니다", () => {
    const { getByLabelText } = makeAddCardContainer();

    const firstInput = getByLabelText(CARD_NUMBER_LABEL.first);
    const secondInput = getByLabelText(CARD_NUMBER_LABEL.second);
    const thirdInput = getByLabelText(CARD_NUMBER_LABEL.third);
    const fourthInput = getByLabelText(CARD_NUMBER_LABEL.fourth);

    fireEvent.change(firstInput, {
      target: {
        value: 1111,
      },
    });

    expect(secondInput).toHaveFocus();

    fireEvent.change(secondInput, {
      target: {
        value: 2222,
      },
    });

    expect(thirdInput).toHaveFocus();

    fireEvent.change(thirdInput, {
      target: {
        value: 3333,
      },
    });

    expect(fourthInput).toHaveFocus();
  });

  it("입력된 Input 값이 4자리일때 다음 Input이 없다면 focus가 이동되지 않습니다", () => {
    const { getByLabelText } = makeAddCardContainer();

    const fourthInput = getByLabelText(CARD_NUMBER_LABEL.fourth);

    fourthInput.focus();

    fireEvent.change(fourthInput, {
      target: {
        value: 4444,
      },
    });

    expect(fourthInput).toHaveFocus();
  });

  it("카드번호 Input에 값을 입력하면 해당 값이 카드 UI에 표시됩니다", () => {
    const { getByLabelText, getByText } = makeAddCardContainer();

    const fourthInput = getByLabelText(CARD_NUMBER_LABEL.first);

    fireEvent.change(fourthInput, {
      target: {
        value: 4444,
      },
    });

    expect(getByText("4444")).toBeInTheDocument();
  });

  it("유효기간 Input에 값을 입력하면 해당 값이 카드 UI에 표시됩니다", () => {
    const { getByLabelText, getByText } = makeAddCardContainer();

    const monthInput = getByLabelText(EXPIRY_DATE_LABEL.month);
    const yearInput = getByLabelText(EXPIRY_DATE_LABEL.year);

    fireEvent.change(monthInput, {
      target: {
        value: "04",
      },
    });

    fireEvent.change(yearInput, {
      target: {
        value: "21",
      },
    });

    expect(getByText("04/21")).toBeInTheDocument();
  });

  it("카드 소유자이름 Input에 값을 입력하면 해당 값이 카드 UI에 표시됩니다", () => {
    const { getByLabelText, getByText } = makeAddCardContainer();

    const ownerInput = getByLabelText("카드 소유자이름(선택)");

    fireEvent.change(ownerInput, {
      target: {
        value: "HEAEUN",
      },
    });

    expect(getByText("HEAEUN")).toBeInTheDocument();
  });
});
