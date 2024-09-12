// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import user from "./userIdPwDummy";

export default function Login({ setIsLogined }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  //   const navigate = useNavigate();

  const handleLoginInput = (e) => {
    setId(e.target.value.trim());
  };
  const handlePasswordInput = (e) => {
    setPw(e.target.value.trim());
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (id === "") {
      alert("아이디를 입력하지 않았습니다.");
    } else if (pw === "") {
      alert("비밀번호를 입력하지 않았습니다.");
    }
    // alert(`id: ${id}, pw: ${pw}`);
    if (user.idUser === id && user.pwUser === pw) {
      setIsLogined(true);
      //   navigate("/techit_react_2024");
    } else alert("아이디 또는 비밀번호가 잘못되었습니다.");
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
