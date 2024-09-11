import { useState } from "react";
import styled from "styled-components";
import MoodItem from "./MoodItem";

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function MoodList({ setMood }) {
  const [moodNum, setMoodNum] = useState(0);

  return (
    <ListDiv>
      <MoodItem
        moodNum={moodNum}
        setMoodNum={setMoodNum}
        setMood={setMood}
        moodContent={"기분이 좋아요."}
        moodId={1}
      />
      <MoodItem
        moodNum={moodNum}
        setMoodNum={setMoodNum}
        setMood={setMood}
        moodContent={"기분이 정말 좋아요."}
        moodId={2}
      />
      <MoodItem
        moodNum={moodNum}
        setMoodNum={setMoodNum}
        setMood={setMood}
        moodContent={"기분이 최고에요!"}
        moodId={3}
      />
      <MoodItem
        moodNum={moodNum}
        setMoodNum={setMoodNum}
        setMood={setMood}
        moodContent={"기분이 미쳤어요!"}
        moodId={4}
      />
    </ListDiv>
  );
}
