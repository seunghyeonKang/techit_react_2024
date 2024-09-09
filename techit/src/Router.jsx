import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import JSXBasic from "./pages/chapter03/JSXBasic/JSXBasic";
import DigitalClock from "./pages/chapter03/DigitalClock";
import ListRendering from "./pages/chapter03/ListRendering/ListRendering";
import Components from "./pages/chapter04/Components";

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

        {/* chapter0 */}
        {/* chapter0 */}
      </Routes>
    </BrowserRouter>
  );
}
