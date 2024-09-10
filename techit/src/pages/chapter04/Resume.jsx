function Resume({ name, hello, hobby, food, color }) {
  return (
    <div>
      <h1>{name}의 자기소개서</h1>
      <h3>{hello}</h3>
      <dl>
        <dt>취미 : </dt>
        <dd>{hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd style={{ color: "blue" }}>{color}</dd>
      </dl>
    </div>
  );
}

export default function MyResume() {
  return <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />;
}
