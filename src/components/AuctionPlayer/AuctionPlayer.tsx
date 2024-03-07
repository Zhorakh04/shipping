import "./AuctionPlayer.scss";
import { Image1, Image2, Image3, Image4 } from "../../assets/index";
import CarInfoList from "../Product/CarInfoList/CarInfoList";
import PdfIcon from "../Ui/Icons/PdfIcon";
import ImageLoadIcon from "../Ui/Icons/ImageLoadIcon";
import FlagGeorgia from "../Ui/Icons/FlagGeorgia";
import MyButton from "../Ui/customUi/MyButton/MyButton";

const AuctionPlayer = () => {
  return (
    <div className="container">
      <div className="product_header bid_header">
        <div className="bid_header_lot">
          <h5>Lot:</h5>
          <p>12345678</p>
        </div>
        <h4 className="car_name">2014 - BMW 3er Touring:</h4>
        <h4 className="upcomming_lots">Upcoming Lots</h4>
      </div>
      <div className="product_inforamtion">
        <div className="product_info_image">
          <div className="product_info_images">
            <div className="product_info_main_img div__Image"></div>
            <img src={Image1} alt="productimage" />
            <img src={Image2} alt="productimage" />
            <img src={Image3} alt="productimage" />
            <div style={{ position: "relative" }}>
              <div className="product_image_fone">
                <p>+7 photos</p>
              </div>
              <img
                src={Image4}
                alt="productimage"
                width="100%"
                height={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="car_lot_information">
          <div>
            <div className="auction_layer_lot">
              <CarInfoList />
              <div className="auction_bid">
                <div className="auction_timer">
                  <div className="bid_player_info">
                    <FlagGeorgia />
                    <p>UAE</p>
                    <p className="player_bet">$1700</p>
                    <p className="player_bet">Bid!</p>
                  </div>
                </div>
                <div className="place_a_bet">
                  <MyButton className="shadow__Item">-</MyButton>
                  <p className="place_a_bet_money shadow__Item">$1800</p>
                  <MyButton className="shadow__Item">+</MyButton>
                </div>
                <MyButton className="Bid_button">Bid</MyButton>
                <div>
                  <div className="title__Info__Field">Previous Bids</div>
                  <div>
                    <img src="" alt="" />
                    <div>
                      <FlagGeorgia />
                      <p></p>
                    </div>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <div>
                      <FlagGeorgia />
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filtes">
            <div className="title__Info__Field shadow__Item">Filtes</div>
            <div className="filtes_list">
              <div className="filtes_list_item shadow__Item">
                <p>Open</p>
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
      </div>
    </div>
  );
};

export default AuctionPlayer;
