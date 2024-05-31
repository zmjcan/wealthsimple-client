import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import SecPage from "./pages/SecPage/SecPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import FourthPage from "./pages/FourthPage/FourthPage";
import FifthPage from "./pages/FifthPage/FifthPage";
import SixthPage from "./pages/SixthPage/SixthPage";
import SeventhPage from "./pages/SeventhPage/SeventhPage";
import EighthPage from "./pages/EighthPage/EighthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/2" element={<SecPage/>}/>
        <Route path="/3" element={<ThirdPage/>}/>
        <Route path="/4" element={<FourthPage/>}/>
        <Route path="/5" element={<FifthPage/>}/>
        <Route path="/6" element={<SixthPage/>}/>
        <Route path="/7" element={<SeventhPage/>}/>
        <Route path="/8" element={<EighthPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
