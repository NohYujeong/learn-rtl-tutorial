import React from "react";
//fireEvent 를 통해 특정 DOM에 이벤트 발생시키기
import { render, fireEvent } from "react-testing-library";
import Counter from "./Counter";

describe("<Counter/>", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });

  it("has a number and two buttons", () => {
    const utils = render(<Counter />);
    utils.getByText("0");
    utils.getByText("+1");
    utils.getByText("-1");
  });

  it("increases", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const plusButton = utils.getByText("+1");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number.textContent).toBe("2");
    // jest-dom 을 추가했기에 가능한 코드
    // 위와 동작 동일
    expect(number).toHaveTextContent("2");
  });

  it("decreases", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const minusButton = utils.getByText("-1");
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    // input event 를 받을 땐?
    // fireEvent.change(input, {target: {value: "yujeong Noh"}}); <- 이런 식으로
    expect(number.textContent).toBe("-2");
    // jest-dom 을 추가했기에 가능한 코드
    // 위와 동작 동일
    expect(number).toHaveTextContent("-2");
  });
});
