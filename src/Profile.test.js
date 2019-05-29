import React from "react";
import { render } from "react-testing-library";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="yujeong Noh" name="노유정" />);
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the props correctly", () => {
    const utils = render(<Profile username="yujeong Noh" name="노유정" />);
    // 화면 상에 있는 어떤 무언가를 선택할 수 있음, 없으면 바로 error 발생!
    utils.getByText("yujeong Noh");
    // const el = utils.getByText("(노유정)"); // HTMLSpanElement
    // utils.getByText("/노유정/"); 정규식을 넣어서 찾는 것도 가능
  });
});
