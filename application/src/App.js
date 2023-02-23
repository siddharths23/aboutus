import React from "react";
import AboutUs from "./pages/aboutUs";
import { Route, Routes } from "react-router-dom";
import { Siddharth } from "./pages/Siddharth";
import { Dania } from "./pages/Dania";
import { Yahya } from "./pages/Yahya";
import { Farah } from "./pages/Farah";
import { Muhammed } from "./pages/Muhammed";
import { Hanlei } from "./pages/Hanlei";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/siddharth" element={<Siddharth />} />
        <Route path="/dania" element={<Dania />} />
        <Route path="/yahya" element={<Yahya />} />
        <Route path="/farah" element={<Farah />} />
        <Route path="/muhammed" element={<Muhammed />} />
        <Route path="/hanlei" element={<Hanlei />} />
      </Routes>
    </>
  );
}

export default App;
