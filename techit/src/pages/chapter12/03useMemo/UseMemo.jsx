import { useMemo, useState } from "react";

function OverloadFunc() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    return OverloadFunc();
  }, []);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
