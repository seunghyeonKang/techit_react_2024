import { createContext, useContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

export default function UseContext() {
  return (
    <div>
      <HelloLicat />
    </div>
  );
}

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);

  return (
    <div>
      <h2>name: {name}</h2>
      <strong>id: {id}</strong>
      <HelloLicatTwo />
    </div>
  );
};

const HelloLicatTwo = () => {
  const { name, id } = useContext(UserInfo);

  return (
    <div>
      <h2>name2: {name}</h2>
      <strong>id2: {id}</strong>
    </div>
  );
};
