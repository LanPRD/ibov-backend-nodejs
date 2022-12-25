import { Route, Routes } from "react-router-dom";

import { Fiis } from "../pages/Fiis";
import { Home } from "../pages/Home";
import { Stocks } from "../pages/Stocks";
import { TopList } from "../pages/TopList";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/toplist" element={<TopList />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/fiis" element={<Fiis />} />
    </Routes>
  );
}
