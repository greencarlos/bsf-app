import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import FAQPage from "./pages/FAQPage";
import TrackPage from "./pages/TrackPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
