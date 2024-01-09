import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buy from "./Page/Buy";
// import { Intro, Refort, Sell } from "./Page";
import Home from "./Home/Home";
import Header from "./Item/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          {/* <Route path="/sell" element={<Sell />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/report" element={<Report />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
