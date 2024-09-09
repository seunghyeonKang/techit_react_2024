import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import JSXBasic from "./pages/chapter03/JSXBasic/JSXBasic";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* chapter02 */}
        <Route path="/techit_react_2024" element={<MainPage />} />

        {/* chapter03 */}
        <Route path="/techit_react_2024/chapter03" element={<JSXBasic />} />
        {/* chapter0 */}
      </Routes>
    </BrowserRouter>
  );
}
