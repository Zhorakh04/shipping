import ProductHeader from "../ProductHeader/ProductHeader";
import Image1 from "../../assets/productItemImage1.jpeg";
import Image2 from "../../assets/productItemImage2.png";
import Image3 from "../../assets/productitemImage3.png";
import Image4 from "../../assets/productItemImage4.png";
import "./ProductItem.css";
import ImageLoadIcon from "../Ui/Icons/ImageLoadIcon";
import PdfIcon from "../Ui/Icons/PdfIcon";

const ProductItem = () => {
  return (
    <div>
      <ProductHeader />
      <div className="product_inforamtion">
        <div className="">
          <div className="product_info_main_img div__Image"></div>
          <div className="product_info_images ">
            <img src={Image1} className="product_image" />
            <img src={Image2} className="product_image" />
            <img src={Image3} className="product_image" />
            <img src={Image4} className="product_image" />
          </div>
        </div>
        <div className="car_lot_information">
          <div className="info_types">
            <div className="title__Info__Field info_type active">
              Lot: #12345678
            </div>
            <div className="title__Info__Field info_type">More Information</div>
          </div>
          <div className="car_info_list">
            <div className="car_info_item">
              <p>Vin:</p>
              <p>1GNCS18Z3M0115561</p>
            </div>
            <div className="car_info_item">
              <p>Odometer:</p>
              <p>104.164 - Actual</p>
            </div>
            <div className="car_info_item">
              <p>Highlights:</p>
              <p>Run and Drive</p>
            </div>
            <div className="car_info_item">
              <p>Color:</p>
              <p>Silver</p>
            </div>
            <div className="car_info_item">
              <p>Engine Type:</p>
              <p>1.6 L 4</p>
            </div>
            <div className="car_info_item">
              <p>Cylinders:</p>
              <p>4</p>
            </div>
            <div className="car_info_item">
              <p>Drive:</p>
              <p>Front - wheel Drive</p>
            </div>
            <div className="car_info_item">
              <p>Fuel:</p>
              <p>Gas</p>
            </div>
            <div className="car_info_item">
              <p>Keys:</p>
              <p>Yes</p>
            </div>
          </div>
          <div className="filtes">
            <div className="title__Info__Field shadow__Item">Filtes</div>
            <div className="filtes_list">
              <div className="filtes_list_item shadow__Item">
                <p></p>Open
              </div>
              <div className="filtes_list_item shadow__Item">
                <ImageLoadIcon />
              </div>
              <div className="filtes_list_item shadow__Item">
                <PdfIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="bid_Information">
          <div className="bid_Information_List">
            <div className="title__Info__Field"></div>
            <div className="car_info_item shadow__Item">
              <p>Bid Status:</p>
            </div>
            <div className="car_info_item shadow__Item">Minimum Bid:</div>
            <div className="shadow__Item">
              <div>
                <p>Current Bid:</p>

                <p>$0</p>
              </div>
              <p>Your Max Bid:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
