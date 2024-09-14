import { useState } from "react";

export default function PetForm() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const [petList, setPetList] = useState([
    {
      id: 101,
      name: "이름",
      species: "종",
      age: "나이",
    },
    {
      id: 102,
      name: "멍컹",
      species: "강아지",
      age: "24",
    },
  ]);

  const HandleSubmit = (event) => {
    event.preventDefault();

    setPetList((prev) => {
      return prev.concat({ name, species, age, id: Date.now() });
    });

    setName("");
    setSpecies("");
    setAge("");
  };

  return (
    <>
      <h1>애완동물 정보 리스트</h1>

      <form onSubmit={HandleSubmit}>
        <fieldset>
          <legend>새로운 애완동물을 추가하세요!</legend>
          <label>
            <input
              type="text"
              placeholder="이름"
              onChange={(e) => {
                return setName(e.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="종"
              onChange={(e) => {
                return setSpecies(e.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="나이"
              onChange={(e) => {
                return setAge(e.target.value);
              }}
            />
          </label>
          <button>추가하기</button>
        </fieldset>
      </form>

      <ul>
        {petList.map((item) => {
          return <Pet key={item.id} {...item} />;
        })}
      </ul>
    </>
  );
}

function Pet({ name, species, age }) {
  return (
    <li>
      {name}(은)는 {species}(이)고 {age}살입니다.
    </li>
  );
}
