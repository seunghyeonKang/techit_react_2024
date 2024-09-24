import { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  let countRef = useRef(0);
  let countConst = 0;

  const handleCountUpState = (e) => {
    setCount(count + 1);
    console.log(count);
    // 랜더링 된다.
  };

  const handleCountUpRef = (e) => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
    // 클릭하면 변수의 값은 증가하지만, 랜더링은 되지 않는다.
  };

  const handleCountUpConst = (e) => {
    countConst = countConst + 1;
    console.log(countConst);
    // 랜더링이 안 되고, 다른 state가 변해서 재렌더링 되면 0으로 초기화한다.
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUpState}>up!</button>
      <div>{countRef.current}</div>
      <button onClick={handleCountUpRef}>up!</button>
      <div>{countConst}</div>
      <button onClick={handleCountUpConst}>up!</button>
    </>
  );
}
