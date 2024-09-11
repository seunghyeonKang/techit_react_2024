import { useState } from "react";
import styled from "styled-components";
import MoodList from "./MoodList";

const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const MoodDiv = styled.div`
  margin: 8px;
  padding: 12px;
  width: 240px;
  height: 92px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: 4px solid teal;

  font-size: medium;
  font-weight: 900;
`;

export default function DisplayMood() {
  const [mood, setMood] = useState("오늘의 기분을 선택해주세요.");

  return (
    <BodyDiv>
      <h1>오늘의 기분을 선택해주세요</h1>
      <MoodList setMood={setMood} />
      <br />
      <MoodDiv>{mood}</MoodDiv>
    </BodyDiv>
  );
}
