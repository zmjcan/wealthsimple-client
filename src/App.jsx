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
        <Route path="/heroes" element={<SecPage/>}/>
        <Route path="/heroes/:heroId/villans" element={<ThirdPage/>}/>
        <Route path="/heroes/:heroId/villans/:villanId" element={<FourthPage/>}/>
        <Route path="/heroes/:heroId/villans/:villanId/timelines" element={<FifthPage/>}/>
        <Route path="/heroes/:heroId/villans/:villanId/timelines/:timelineId" element={<SixthPage/>}/>
        <Route path="/heroes/:heroId/villans/:villanId/timelines/:timelineId/results" element={<SeventhPage/>}/>
        <Route path="/heroes/:heroId/villans/:villanId/timelines/:timelineId/results/actions" element={<EighthPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
