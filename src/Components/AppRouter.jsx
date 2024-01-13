import { Route, Routes } from "react-router-dom";
import Intro from "../Page/Intro";
import Buy from "../Page/Buy";
import Home from "../Home/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/intro" element={<Intro />} />
      {/* <Route path="/sell" element={<Sell />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/report" element={<Report />} /> */}
    </Routes>
  );
};

export default AppRouter;
