import ProductHeader from "../ProductHeader/ProductHeader";
import Image1 from "../../assets/productItemImage1.jpeg";
import Image2 from "../../assets/productItemImage2.png";
import Image3 from "../../assets/productitemImage3.png";
import Image4 from "../../assets/productItemImage4.png";
import "./ProductItem.css";
import ImageLoadIcon from "../Ui/Icons/ImageLoadIcon";
import PdfIcon from "../Ui/Icons/PdfIcon";
import MyButton from "../Ui/customUi/MyButton/MyButton";
import MyInput from "../Ui/customUi/MyInput/MyInput";

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
          <div>
            <div className="info_types">
              <div className="title__Info__Field info_type active">
                Lot: #12345678
              </div>
              <div className="title__Info__Field info_type">
                More Information
              </div>
            </div>
            <div className="car_info_list">
              <div className="car_info_item shadow__Item">
                <p>Vin:</p>
                <p>1GNCS18Z3M0115561</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Odometer:</p>
                <p>104.164 - Actual</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Highlights:</p>
                <p>Run and Drive</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Color:</p>
                <p>Silver</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Engine Type:</p>
                <p>1.6 L 4</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Cylinders:</p>
                <p>4</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Drive:</p>
                <p>Front - wheel Drive</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Fuel:</p>
                <p>Gas</p>
              </div>
              <div className="car_info_item shadow__Item">
                <p>Keys:</p>
                <p>Yes</p>
              </div>
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
            <div className="title__Info__Field bid_Information_title">
              Bid information
            </div>
            <div className="car_info_item shadow__Item">
              <p>Bid Status:</p>
            </div>
            <div className="car_info_item shadow__Item">Minimum Bid:</div>
            <div className="shadow__Item car_info_item Bid_form">
              <div className="bid__current_bid">
                <p>Current Bid:</p>
                <p>$0</p>
              </div>
              <p>Your Max Bid:</p>
              <div className="bid__buy_item">
                <span>$</span>
                <MyInput placeholder="400" />
              </div>
              <MyButton className={"bid_button"}>Bid Now</MyButton>
              <p className="bid_price" style={{ textAlign: "center" }}>
                $3.400
              </p>
              <MyButton className={"bid_button buy_button"}>
                Buy It Now
              </MyButton>
            </div>
          </div>
          <div className="sale_Information">
            <div className="title__Info__Field">Sale Inforamation</div>
            <div className="car_info_item">
              <p>Sale Inforamation</p>
              <p>Georgia</p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Address:</p>
              <p>45, Kote Aphkhazi Str, 45 Kote Afkhazi St, Tbilisi 0105</p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Mail:</p>
              <p>globalshipping@gmail.com</p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Ph. Number:</p>
              <p>+995 350 223 334</p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Time Number:</p>
              <p>0d 24h 1min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
