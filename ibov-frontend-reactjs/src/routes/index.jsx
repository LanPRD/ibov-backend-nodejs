import React from "react";
import { Routes, Route } from "react-router-dom";

import FirstPage from "../pages/FirstPage";
import TopList from "../pages/TopList";
import Stocks from "../pages/Stocks";
import Fiis from "../pages/Fiis";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<FirstPage />} />
      <Route path="/toplist" element={<TopList />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/fiis" element={<Fiis />} />
    </Routes>
  );
}
