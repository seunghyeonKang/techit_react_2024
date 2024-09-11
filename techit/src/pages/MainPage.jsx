import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const handleMoveToPage = (link) => {
    navigate(`/techit_react_2024${link}`);
  };

  return (
    <>
      <h2>멋쟁이 사자처럼 스터디</h2>
      <div
        onClick={() => {
          handleMoveToPage("");
        }}
      >
        <p>
          <strong>[ TeChit ]</strong> - 프론트엔드(React) 온보딩 트랙
        </p>
      </div>
      <br />
      <hr />

      {/* Chapter03 */}
      <h2>Chapter03</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter03/jsx-Basic");
        }}
      >
        1{")"} jsx 기초
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter03/digital-clock");
        }}
      >
        2{")"} [미니 실습]날짜&시간
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter03/list-rendering");
        }}
      >
        3{")"} [미니 실습] 리스트
      </p>
      <br />

      <hr />
      {/* Chapter04 */}
      <h2>Chapter04</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter04/components");
        }}
      >
        1{")"} 리액트 컴포넌트 기초
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter04/my-resume");
        }}
      >
        2{")"} 자기소개서
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter04/color-text");
        }}
      >
        3{")"} 글자에 색 입히기
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter04/datas-rendering");
        }}
      >
        4{")"} 데이타 렌더링 - 구조 분해 할당
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter04/sell-goods");
        }}
      >
        5{")"} 상품 판매 사이트
      </p>
      <br />

      <hr />
      {/* Chapter05 */}
      <h2>Chapter05</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter05/like-button-num");
        }}
      >
        1{")"} 좋아요 버튼 - 개수 세기
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter05/like-button-bool");
        }}
      >
        2{")"} 좋아요 버튼 - 취소
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter05/display-mood");
        }}
      >
        3{")"} 오늘의 기분은?
      </p>
      <br />

      <hr />
      {/* Chapter0 */}
      {/* Chapter0 */}
      {/* Chapter0 */}
      <h2>Chapter0</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter04/components");
        }}
      >
        1{")"} 리액트
      </p>
      <br />
    </>
  );
}
