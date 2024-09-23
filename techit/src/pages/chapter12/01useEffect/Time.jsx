import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  console.log("rendering");

  useEffect(() => {
    let time = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [time]);

  return (
    <>
      <p>
        시간: {hour}시 {minute}분 {second}초
      </p>
    </>
  );
}
