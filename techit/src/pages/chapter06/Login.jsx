export default function Login() {
  const handleLoginInput = (e) => {
    console.log("아이디: ", e.target.value);
  };
  const handlePasswordInput = (e) => {
    console.log("패스워드: ", e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit 이벤트 발생: ");
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
