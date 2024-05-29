import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
