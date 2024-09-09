import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const handleMoveToPage = (link) => {
    navigate(`/techit_react_2024${link}`);
  };

  return (
    <>
      <h1>Hello Lions!!</h1>
      <p
        onClick={() => {
          handleMoveToPage("");
        }}
      >
        This is a main page
      </p>
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
      <br />
    </>
  );
}
