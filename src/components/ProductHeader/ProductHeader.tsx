import FlagGeorgia from "../Ui/Icons/FlagGeorgia";
import "./ProductHeader.css";

const ProductHeader = () => {
  return (
    <div className="product_header">
      <h3 className="product_title">2014 - BMW 3er Touring</h3>
      <div className="product_header_Info">
        <div>
          <p>Lot: </p>
          <p className="product_header_Info_item">12345678</p>
        </div>
        <div>
          <p>Sale Location: </p>
          <p className="product_header_Info_item">
            <FlagGeorgia />
            Georgia
          </p>
        </div>
        <div>
          <p>Sale Date: </p>
          <p className="product_header_Info_item">
            Tomorrow/May 28/2020 - 04:00 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
