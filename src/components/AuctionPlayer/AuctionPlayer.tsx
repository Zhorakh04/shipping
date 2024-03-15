import "./AuctionPlayer.scss";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  bidPlayer1,
  bidPlayer2,
  upcomingCars2,
  upcomingCars3,
  upcomingCars4,
} from "../../assets/index";
import CarInfoList from "../Product/CarInfoList/CarInfoList";
import MyButton from "../Ui/customUi/MyButton/MyButton";
import FlagUAE from "../Ui/Icons/FlagUAE";
import FlagArm from "../Ui/Icons/FlagArm";
import VolumeIcon from "../Ui/Icons/VolumeIcon";
import FlagGeorgia from "../Ui/Icons/FlagGeorgia";
import Files from "../Product/Files/Files";
import AuctionBidTimer from "./AuctionBidTimer/AuctionBidTimer";

const AuctionPlayer = () => {
  return (
    <div className="auction_player">
      <div className="container live_now">
        <div>
          <FlagGeorgia />
          <h4>Live Now</h4>
        </div>
        <div>
          <h5 className="participants_count">106 Participants</h5>
          <p>65 Left</p>
        </div>
      </div>
      <div className="container">
        <div className="product_header product_information">
          <div className="bid_header_lot">
            <h5>Lot:</h5>
            <p>12345678</p>
          </div>
          <h4 className="car_name">2014 - BMW 3er Touring</h4>
          <h4 className="upcomming_lots_title">Upcoming Lots</h4>
        </div>
      </div>

      <div className="product_information list container">
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
              <img src={Image4} alt="productimage" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div className="car_lot_information">
          <div>
            <div className="auction_layer_lot">
              <CarInfoList>
                <div className="car_info_item shadow__Item">
                  <p>Vin:</p>
                  <p>1GNCS18Z3M0115561</p>
                </div>
              </CarInfoList>
              <div className="auction_bid">
                <AuctionBidTimer />
                <div className="previous_bid">
                  <div className="title__Info__Field">Previous Bids</div>
                  <div className="previous_bid_player_info">
                    <div className="shadow__Item">
                      <div
                        className="previous_bid_player_img"
                        style={{ background: `url(${bidPlayer1})` }}
                      ></div>
                      <div>
                        <p>
                          <FlagArm /> Arm
                        </p>
                        <p>
                          <b>1.600$</b>
                        </p>
                      </div>
                    </div>
                    <div className="shadow__Item">
                      <div
                        className="previous_bid_player_img"
                        style={{ background: `url(${bidPlayer2})` }}
                      ></div>
                      <div>
                        <p>
                          <FlagUAE /> Arm
                        </p>
                        <p>
                          <b>1.650$</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>3400$</p>
                  <MyButton className="Bid_button btn2">Buy It Now</MyButton>
                </div>
              </div>
            </div>
          </div>
          <Files />
        </div>
        <div className="upcomming_lots">
          <div className="upcomming_lots_item shadow__Item">
            <div
              style={{
                background: `url(${Image1})`,
              }}
              className="upcomming_item_image"
            >
              <MyButton className="upcomming_item_btn ">Next</MyButton>
            </div>

            <div className="upcomming_lots_item_info ">
              <p className="upcomming_lots_item_title">
                2014 - BMW 3er Touring
              </p>
              <p>Lot: 12345678</p>
              <p>Location: Georgia</p>
              <p>Current Bid: $3.400</p>
            </div>
          </div>
          <div className="upcomming_lots_item shadow__Item">
            <div
              style={{
                background: `url(${upcomingCars2})`,
              }}
              className="upcomming_item_image"
            >
              <MyButton className="upcomming_item_btn ">Next</MyButton>
            </div>

            <div className="upcomming_lots_item_info ">
              <p className="upcomming_lots_item_title">
                2013 - Mercedes Benz GLC
              </p>
              <p>Lot: 12345678</p>
              <p>Location: Georgia</p>
              <p>Current Bid: $3.400</p>
            </div>
          </div>
          <div className="upcomming_lots_item shadow__Item">
            <div
              style={{
                background: `url(${upcomingCars3})`,
              }}
              className="upcomming_item_image"
            >
              <MyButton className="upcomming_item_btn ">Next</MyButton>
            </div>

            <div className="upcomming_lots_item_info ">
              <p className="upcomming_lots_item_title">2019 - Toyota Corolla</p>
              <p>Lot: 12345678</p>
              <p>Location: Georgia</p>
              <p>Current Bid: $3.400</p>
            </div>
          </div>
          <div className="upcomming_lots_item shadow__Item">
            <div
              style={{
                background: `url(${upcomingCars4})`,
              }}
              className="upcomming_item_image"
            >
              <MyButton className="upcomming_item_btn ">Next</MyButton>
            </div>

            <div className="upcomming_lots_item_info ">
              <p className="upcomming_lots_item_title">2019 - BMW 1er Lim</p>
              <p>Lot: 12345678</p>
              <p>Location: Georgia</p>
              <p>Current Bid: $3.400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionPlayer;
