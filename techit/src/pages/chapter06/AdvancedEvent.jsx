import { useState } from "react";
import styled from "styled-components";

const EventBtn = styled.button`
  margin: 8px;
  padding: 12px 20px;

  text-align: center;

  border: 1px solid teal;
  border-radius: 8px;

  font-size: medium;
  font-weight: 900;

  cursor: pointer;
`;

export default function AdvancedEvent() {
  const [isClicked, setisClicked] = useState("onClick");
  const [isMouseEntered, setisMouseEntered] = useState("onMouseEnter");
  const [isMouseLeaved, setisMouseLeaved] = useState("onMouseLeave");
  const [isFocused, setisFocused] = useState("onFocus");
  const [isBlured, setisBlured] = useState("onBlur");

  const handleOnClicked = () => {
    setisClicked("onClick이 클릭되었습니다.");
  };
  const handleOnMouseEntered = () => {
    setisMouseEntered("onMouseEnter: 마우스가 들어왔습니다.");
  };
  const handleOnMouseLeaved = () => {
    setisMouseLeaved("onMouseLeave: 마우스가 떠났습니다.");
  };
  const handleOnFocused = () => {
    setisFocused("onFocus: input이 클릭되었습니다.");
  };
  const handleOnBlured = () => {
    setisBlured("onBlur: input에서 빠져나왔습니다.");
  };

  return (
    <>
      <EventBtn onClick={handleOnClicked}>{isClicked}</EventBtn>
      <EventBtn onMouseEnter={handleOnMouseEntered}>{isMouseEntered}</EventBtn>
      <EventBtn onMouseLeave={handleOnMouseLeaved}>{isMouseLeaved}</EventBtn>
      <br />
      <br />
      <input type="text" onFocus={handleOnFocused} />
      <EventBtn>{isFocused}</EventBtn>
      <br />
      <br />
      <input type="text" onBlur={handleOnBlured} />
      <EventBtn>{isBlured}</EventBtn>
    </>
  );
}
