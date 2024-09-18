import { useState } from "react";
import "./Main.css";

export default function Main(porps) {
  const [field, setField] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDay(Math.ceil(10000 / parseInt(time)));
  };

  return (
    <main>
      {/* container-input */}
      <form class="cont-inp" onSubmit={handleSubmit}>
        <p class="txt-wannabe">
          나는{" "}
          <input
            type="text"
            placeholder="프로그래밍"
            onChange={(event) => setField(event.target.value)}
          />{" "}
          전문가가 될 것이다.
        </p>
        <p class="txt-time">
          그래서 앞으로 매일 하루에{" "}
          <input type="number" placeholder="4" onChange={(event) => setTime(event.target.value)} />
          시간씩 훈련할 것이다.
        </p>
        {/* button-execute */}
        <button class="btn-exc" type="submit">
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
      {day && (
        <section class="cont-result">
          <h2 class="a11y">결과 확인</h2>
          <p class="txt-wannabe">
            당신은 <strong>{field}</strong> 전문가가 되기 위해서
            <br />
            대략 <strong>{day}</strong>일 이상 훈련하셔야 됩니다.
          </p>
          <button type="button" class="btn-go" onClick={() => porps.modalOpen(true)}>
            훈련하러 가기 Go!Go!
          </button>
          <button type="button" class="btn-share">
            공유하기
          </button>
        </section>
      )}
    </main>
  );
}
