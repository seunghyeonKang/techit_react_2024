import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const handleMoveToMainPage = () => {
    navigate(`/techit_react_2024`);
  };
  const handleMoveToChapter03 = () => {
    navigate(`/techit_react_2024/chapter03`);
  };

  return (
    <>
      <div onClick={handleMoveToMainPage}>
        <h1>Hello Lions!!</h1>
        <p>This is a main page</p>
      </div>
      <br />
      <hr />

      <div onClick={handleMoveToChapter03}>
        <h3>Chapter03</h3>
        <h4>jsx 기초</h4>
        <p>링크 : /techit_react_2024/chapter03</p>
      </div>
    </>
  );
}
