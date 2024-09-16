import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${/* ${reset} */ ""}
  ${reset}
  
  p{
    color: red;
  }
`;

export default function GlobalStyleCss() {
  return (
    <>
      <GlobalStyle />
      <h2>글로벌 스타일과 reset.css입니다.</h2>
      <p>createGlobalStyle</p>
    </>
  );
}
