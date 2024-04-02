import AddtoWatchlist from "../../components/AddtoWatchlist";
import { ProductItem, BreadcrumbNavigation } from "../../components/index";

import "./Product.scss";

const Product = () => {
  return (
    <div>
      <BreadcrumbNavigation />
      <AddtoWatchlist />
      <ProductItem />
    </div>
  );
};

export default Product;
