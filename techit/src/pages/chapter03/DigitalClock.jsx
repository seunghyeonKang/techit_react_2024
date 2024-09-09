export default function DigitalClock() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div style={{ color: "royalblue" }}>
      <h2>
        {year}년 {month}월 {date}일
      </h2>
      <h2>
        {hour}시 {min}분 {sec}초
      </h2>
    </div>
  );
}
