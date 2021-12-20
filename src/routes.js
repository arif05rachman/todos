import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouteList;
