import { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  margin: 60px auto;
  width: 500px;

  h2 {
    font-size: 32px;
    font-weight: 900;
    margin: 0 0 4px 0;
  }
  ul {
    padding: 0;

    list-style: none;
  }
  li {
    padding: 20px 24px;
    border: 0.5px solid #e4e4e4;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px 0;
  }
  h3 {
    font-size: 20px;
    font-weight: 900;
    margin: 0 0 4px 0;
  }
  p {
    color: #888888;
    margin: 0 0 6px 0;
  }
  button {
    float: right;
    padding: 10px;
    border-radius: 5px;

    background-color: white;
    font-size: 16px;
    margin-bottom: 80px;
  }
`;

export default function UseEffectFetch() {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/nations");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        return response.json();
      })
      .then((json) => setNations(json))
      .catch((error) => console.error("데이터를 가져오는데 문제가 발생했습니다.", error));
  }, [url]);

  console.log(nations);

  return (
    <Item>
      <h2>나라 목록</h2>
      <br />
      <ul>
        {nations.map((nations) => (
          <li key={nations.id}>
            <h3>{nations.title}</h3>
            <p>{nations.loc}</p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setUrl("http://localhost:3001/nations")}>전체목록</button>
        <button onClick={() => setUrl("http://localhost:3001/nations?loc=europe")}>유럽목록</button>
      </div>
    </Item>
  );
}
