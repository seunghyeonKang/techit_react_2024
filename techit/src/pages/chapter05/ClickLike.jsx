import { useState } from "react";

export default function ClickLike() {
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
  }

  return (
    <>
      <button onClick={clickLike}>
        <h1>
          like <span>{like}</span>
        </h1>
      </button>
    </>
  );
}
