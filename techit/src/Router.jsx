import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import JSXBasic from "./pages/chapter03/JSXBasic/JSXBasic";
import DigitalClock from "./pages/chapter03/DigitalClock";
import ListRendering from "./pages/chapter03/ListRendering/ListRendering";
import Components from "./pages/chapter04/Components";
import MyResume from "./pages/chapter04/Resume";
import ColorTextPage from "./pages/chapter04/ColorText/ColorTextPage";
import DatasPage from "./pages/chapter04/Datas";
import SellGoods from "./pages/chapter04/SellGoods/SellGoods";
import ClickLike from "./pages/chapter05/ClickLike";
import IsLike from "./pages/chapter05/IsLike";
import DisplayMood from "./pages/chapter05/DisplayMood/DisplayMood";
import Events from "./pages/chapter06/Events";
import Login from "./pages/chapter06/Login";
import HomeNLoginPage from "./pages/chapter06/AdvancedLogin/HomeNLoginPage";
import AdvancedEvent from "./pages/chapter06/AdvancedEvent";
import ComponentList from "./pages/chapter07/ComponentList/ComponentList";
import ConditionalRendering from "./pages/chapter07/ConditionalRendering/ConditionalRendering";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* chapter02 */}
        <Route path="/techit_react_2024" element={<MainPage />} />

        {/* chapter03 */}
        <Route path="/techit_react_2024/chapter03/jsx-Basic" element={<JSXBasic />} />
        <Route path="/techit_react_2024/chapter03/digital-clock" element={<DigitalClock />} />
        <Route path="/techit_react_2024/chapter03/list-rendering" element={<ListRendering />} />

        {/* chapter04 */}
        <Route path="/techit_react_2024/chapter04/components" element={<Components />} />
        <Route path="/techit_react_2024/chapter04/my-resume" element={<MyResume />} />
        <Route path="/techit_react_2024/chapter04/color-text" element={<ColorTextPage />} />
        <Route path="/techit_react_2024/chapter04/datas-rendering" element={<DatasPage />} />
        <Route path="/techit_react_2024/chapter04/sell-goods" element={<SellGoods />} />

        {/* chapter05 */}
        <Route path="/techit_react_2024/chapter05/like-button-num" element={<ClickLike />} />
        <Route path="/techit_react_2024/chapter05/like-button-bool" element={<IsLike />} />
        <Route path="/techit_react_2024/chapter05/display-mood" element={<DisplayMood />} />

        {/* chapter06 */}
        <Route path="/techit_react_2024/chapter06/events" element={<Events />} />
        <Route path="/techit_react_2024/chapter06/login" element={<Login />} />
        <Route path="/techit_react_2024/chapter06/advanced-login" element={<HomeNLoginPage />} />
        <Route path="/techit_react_2024/chapter06/advanced-event" element={<AdvancedEvent />} />

        {/* chapter07 */}
        <Route path="/techit_react_2024/chapter07/component-list" element={<ComponentList />} />
        <Route
          path="/techit_react_2024/chapter07/conditional-rendering"
          element={<ConditionalRendering />}
        />

        {/* chapter0 */}
        {/* chapter0 */}
      </Routes>
    </BrowserRouter>
  );
}
