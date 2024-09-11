import { useState } from "react";

export default function IsLike() {
  const [isLike, setIsLike] = useState(false);

  function clickLike() {
    setIsLike(!isLike);
  }

  return (
    <button onClick={clickLike}>
      <h2>{isLike ? "좋아요 취소" : "좋아요"}</h2>
    </button>
  );
}
