import { Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Product from "../page/Product/Product";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default AppRouter;
