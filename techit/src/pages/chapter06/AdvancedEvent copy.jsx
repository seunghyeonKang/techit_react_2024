import { useState } from "react";

export default function AdvancedEventCopyyy() {
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
      <button onClick={handleOnClicked}>{isClicked}</button>
      <button onMouseEnter={handleOnMouseEntered}>{isMouseEntered}</button>
      <button onMouseLeave={handleOnMouseLeaved}>{isMouseLeaved}</button>
      <br />
      <br />
      <input type="text" onFocus={handleOnFocused} />
      <button>{isFocused}</button>
      <br />
      <br />
      <input type="text" onBlur={handleOnBlured} />
      <button>{isBlured}</button>
    </>
  );
}
