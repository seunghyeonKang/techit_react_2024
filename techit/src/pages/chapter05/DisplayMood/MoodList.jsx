import { useState } from "react";
import styled from "styled-components";
import MoodItem from "./MoodItem";

const ListDiv = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function MoodList({ setMood }) {
  const moodList = [
    "기분이 좋아요.",
    "기분이 정말 좋아요.",
    "기분이 최고에요!",
    "기분이 미쳤어요!",
  ];
  const [moodNum, setMoodNum] = useState(0);

  return (
    <ListDiv>
      {moodList.map((moodContent, index) => {
        return (
          <MoodItem
            moodNum={moodNum}
            setMoodNum={setMoodNum}
            setMood={setMood}
            moodContent={moodContent}
            moodId={index + 1}
            key={index}
          />
        );
      })}
    </ListDiv>
  );
}
