import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
  render,
  fireEvent,
  wait,
  waitForElement,
  waitForDomChange,
  waitForElementToBeRemoved
} from "react-testing-library";

describe("<DelayedToggle/>", () => {
  it("reveals text when toggle is ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 대기
    // timeout 설정 가능 (기본값 : 4500ms)
    await wait(() => getByText("야호!!"), { timeout: 3000 });
  });

  it("toggles text ON/OFF", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const text = await waitForElement(() => getByText("ON"));
    // waitForElement
    // 특정 엘리먼트가 나타났거나, 바뀌었거나, 사라질 때까지 대기
    // promise가 끝날 때 우리가 선택한 엘리먼트를 resolve
    expect(text).toHaveTextContent("ON");
  });

  it("changes something when button is clicked", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const mutations = await waitForDomChange({ container });
    // 검사하고 싶은 엘리먼트를 넣어주면 해당 엘리먼트에서
    // 변화가 발생할 때까지 기다려줌
    // container를 넣어주면 사전에 쿼리를 통하여 엘리먼트를 선택하지 않아도
    // 변화가 발생했음을 감지할 수 있음
    console.log(mutations);
  });

  it("remove text when toggle is OFF", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await waitForDomChange({ container }); // ON
    getByText("야호!!");
    fireEvent.click(toggleButton); // OFF
    // OFF 되고 "야호!!" 가 사라졌는지 확인
    await waitForElementToBeRemoved(() => getByText("야호!!"));
  });
});
