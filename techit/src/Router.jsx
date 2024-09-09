import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/techit_react_2024" element={<MainPage />} />
        {/* chapter02 */}

        {/* chapter0 */}
      </Routes>
    </BrowserRouter>
  );
}
