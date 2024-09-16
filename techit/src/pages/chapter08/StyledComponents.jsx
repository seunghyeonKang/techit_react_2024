import styled, { css } from "styled-components";

const BasicStyle = css`
  margin: 0;
  padding: 0;
`;

const ContentDiv = styled.div`
  ${BasicStyle}

  padding: 30px;
`;
const ContentH2 = styled.h2`
  font-size: 20px;
  text-align: center;
  color: ${(props) => (props.color === "red" ? "red" : "teal")};
`;

const ContentExtends = styled(ContentH2)`
  border: 3px solid black;
`;

export default function StyledComponents() {
  return (
    <>
      <ContentDiv>
        <ContentH2 color="blue">styled-components</ContentH2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptates vero
          repellat eaque at eum obcaecati quidem maxime amet voluptatibus soluta neque accusantium
          illum enim porro mollitia officiis, quibusdam iusto!
        </p>
        <ContentExtends>확장 스타일</ContentExtends>
        <p>
          Quisquam, voluptates vero repellat eaque at eum obcaecati quidem maxime amet voluptatibus
          soluta neque accusantium illum enim porro mollitia officiis, quibusdam iusto! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. sit amet consectetur, adipisicing elit.
        </p>
      </ContentDiv>
    </>
  );
}
