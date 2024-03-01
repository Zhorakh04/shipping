import { Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Product from "../page/Product/Product";
import Error from "../page/Error/Error";

import { useEffect } from "react";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
