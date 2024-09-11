import styled from "styled-components";

const MoodButton = styled.button`
  margin: 8px;
  padding: 12px;
  width: 240px;
  height: 48px;

  text-align: center;
  background-color: whitesmoke;

  font-size: medium;
  font-weight: 500;

  &:hover {
    background-color: lightblue;
  }
  &.selected {
    background-color: teal;
    color: white;
  }
`;

export default function MoodItem({ moodNum, setMoodNum, moodContent, setMood, moodId }) {
  function clickMood() {
    setMood(moodContent);
    setMoodNum(moodId);
  }

  return (
    <MoodButton onClick={clickMood} className={moodNum === moodId ? "selected" : ""}>
      {moodContent}
    </MoodButton>
  );
}
