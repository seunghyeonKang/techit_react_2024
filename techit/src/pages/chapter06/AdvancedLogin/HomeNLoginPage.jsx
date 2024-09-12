import { useState } from "react";
import Login from "./Login";
import MainPage from "../../MainPage";

export default function HomeNLoginPage() {
  const [isLogined, setIsLogined] = useState(false);

  return <>{isLogined ? <MainPage /> : <Login setIsLogined={setIsLogined} />}</>;
}
