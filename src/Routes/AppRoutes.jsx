import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
// import your route components too

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
