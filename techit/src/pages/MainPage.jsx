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
        2{")"} [미니 실습] 날짜&시간
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
        5{")"} [실습] 상품 판매 사이트
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
        3{")"} [실습] 오늘의 기분은?
      </p>
      <br />

      <hr />
      {/* Chapter06 */}
      <h2>Chapter06</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter06/events");
        }}
      >
        1{")"} 이벤트 모음
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter06/login");
        }}
      >
        2{")"} 로그인 폼
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter06/advanced-login");
        }}
      >
        3{")"} [실습] 메인페이지와 로그인페이지 연계
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter06/advanced-event");
        }}
      >
        4{")"} 이벤트 더 알아보기
      </p>
      <br />

      <hr />
      {/* Chapter07 */}
      <h2>Chapter07</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter07/component-list");
        }}
      >
        1{")"} 컴포넌트 리스트
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter07/conditional-rendering");
        }}
      >
        2{")"} [실습] 조건부 렌더링 - 네비게이션 컴포넌트
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter07/pet-form");
        }}
      >
        3{")"} [실습, 복습필요] 펫 정보 입력
      </p>
      <br />

      <hr />
      {/* Chapter08 */}
      <h2>Chapter08</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter08/style-module");
        }}
      >
        1{")"} 스타일 - 모듈.css
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter08/style-global-reset");
        }}
      >
        2{")"} 스타일 - 글로벌스타일, reset.css
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter08/styled-components");
        }}
      >
        3{")"} 스타일 - styled-components
      </p>
      <br />

      <hr />
      {/* Chapter09 */}
      <h2>Chapter09</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter09/10000");
        }}
      >
        1{")"} [실습] 1만 시간의 법칙
      </p>
      <br />

      <hr />
      {/* Chapter10 */}
      <h2>Chapter10</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter10/class-components");
        }}
      >
        1{")"} 라이프 사이클 - 클래스 컴포넌트
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter10/class-components-lifecyle");
        }}
      >
        2{")"} 라이프 사이클 - 클래스 컴포넌트 lifecycle 메서드 콘솔로그보기
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter10/function-components-lifecyle");
        }}
      >
        3{")"} 라이프 사이클 - Hook Flow(useEffect, useLayoutEffect)
      </p>
      <br />

      <hr />
      {/* Chapter11 */}
      <h2>Chapter11</h2>
      <p>1{")"} 리액트 라우터 (App.js로 직접 연결하기)</p>
      <p>2{")"} 리액트 라우터 퀴즈 (App.js로 직접 연결하기)</p>
      <br />

      <hr />
      {/* Chapter12 */}
      <h2>Chapter12</h2>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/useEffect-counter");
        }}
      >
        1-1{")"} useEffect - 카운터
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/useEffect-time");
        }}
      >
        1-2{")"} useEffect - 디지털 시계
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/useRef");
        }}
      >
        2-1{")"} useRef 기초 - 다른 변수와의 차이점
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/login-without-useRef");
        }}
      >
        2-2{")"} useRef - useRef없이 로그인 페이지 만들기
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/login-with-useRef");
        }}
      >
        2-3{")"} useRef - useRef로 로그인 페이지 만들기
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/useMemo-FibonacciSeries");
        }}
      >
        3-0{")"} useMemo - 피모나치 수열
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/useMemo");
        }}
      >
        3-1{")"} useMemo - 과부하 버튼
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/useContext");
        }}
      >
        4-1{")"} useContext - 기본
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/useContext-expert");
        }}
      >
        4-2{")"} useContext - 파일 분리
      </p>
      <p
        onClick={() => {
          handleMoveToPage("/chapter12/0000");
        }}
      >
        5-1{")"} ajax 통신 실습
      </p>
      <br />
    </>
  );
}
