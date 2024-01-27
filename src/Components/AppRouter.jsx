import { Route, Routes } from "react-router-dom";
import Intro from "../Page/Intro";
import Buy from "../Page/Buy";
import Home from "../Home/Home";
import Register from "../Components/Register";
import BuySubmit from "../Page/BuySubmit";
import Sell from "../Page/Sell";
import BuyRead from "../Page/BuyRead";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/post/:id" element={<BuyRead />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/register" element={<Register />} />
      <Route path="/buysubmit" element={<BuySubmit />} />
      {/* // <Route path="/intro" element={<Intro />} />
          // <Route path="/report" element={<Report />} /> */}
    </Routes>
  );
};

export default AppRouter;
