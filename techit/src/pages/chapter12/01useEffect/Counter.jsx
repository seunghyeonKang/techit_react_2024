import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const handleCountUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (checkRender) {
      if (count % 2) {
        alert(`${count}은(는) 홀수입니다!`);
      } else {
        alert(`${count}은(는) 짝수입니다!`);
      }
    } else {
      setCheckRender(true);
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
