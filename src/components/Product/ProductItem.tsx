import ProductHeader from "../ProductHeader/ProductHeader";
import Image1 from "../../assets/productItemImage1.jpeg";
import "./ProductItem.css";

const ProductItem = () => {
  return (
    <div>
      <ProductHeader />
      <div className="product_inforamtion">
        <div className="">
          <div className="product_info_main_img div__Image"></div>
          <div className="product_info_images">
            <img src={Image1} className="product_image" />
            <img src={Image1} className="product_image" />
            <img src={Image1} className="product_image" />
            <img src={Image1} className="product_image" />
          </div>
        </div>
        <div className="car_lot_information">
          <div className="info_types">
            <div className="info_type active">Lot: #12345678</div>
            <div className="info_type">More Information</div>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
          <div className="car_information_item">
            <p>Vin:</p>
            <p>asdasdfsadf</p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductItem;
