import AddtoWatchlist from "../../components/AddtoWatchlist/AddtoWatchList";
import BreadcrumbNavigation from "../../components/BreadCrumbNavigation/BreadcrumbNavigation";
import ProductItem from "../../components/Product/ProductItem";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <div className="container">
        <BreadcrumbNavigation />
        <AddtoWatchlist />
        <ProductItem />
      </div>
    </div>
  );
};

export default Product;
