import licat from "../../images/licat.png";
import "./Modal.css";

export default function Modal(porps) {
  return (
    // 모달: dialog태그/article태그
    <article id="modal">
      <div class="modal-wrap">
        <h2>화이팅!!♥♥♥</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={licat} alt="라이캣의 응원" />
        <button class="btn-close" type="button" onClick={() => porps.modalClose(false)}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
        <p>(그냥 닫기 버튼입니다.)</p>
      </div>
    </article>
  );
}
