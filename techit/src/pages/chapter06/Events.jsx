import { useState } from "react";

export default function Events() {
  const [message, setMessage] = useState("여기를 주목해주세요!");

  const handleOnMouseEnter = () => {
    setMessage("안녕하세요!");
  };
  const handleOnMouseLeave = () => {
    setMessage("안녕히가세요!");
  };

  return (
    <>
      <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        여기에 마우스를 올려보세요!
      </p>
      <strong>{message}</strong>
    </>
  );
}
