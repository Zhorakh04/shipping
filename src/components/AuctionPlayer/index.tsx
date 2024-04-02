import styles from "./AuctionPlayer.module.scss";

import {
  Image1,
  Image2,
  Image3,
  Image4,
  bidPlayer1,
  bidPlayer2,
} from "../../assets/index";
import { FlagArm, FlagUAE, FlagGeorgia } from "../../assets";

import CarInfoList from "../Product/CarInfoList";
import MyButton from "../Ui/customUi/MyButton/MyButton";
import Files from "../Product/Files/";
import AuctionBidTimer from "./AuctionBidTimer";
import UpcommingLotsList from "./UpcommingLotsLIst";

const AuctionPlayer = () => {
  return (
    <div className={styles.auction_player}>
      <div className={["container", styles.live_now].join(" ")}>
        <div>
          <FlagGeorgia />
          <h4>Live Now</h4>
        </div>
        <div>
          <h5 className={styles.participants_count}>106 Participants</h5>
          <p>65 Left</p>
        </div>
      </div>
      <div className="container">
        <div className={[styles.product_header, styles.product_info].join(" ")}>
          <div className={styles.bid_header_lot}>
            <h5>Lot:</h5>
            <p>12345678</p>
          </div>
          <h4 className={styles.car_name}>2014 - BMW 3er Touring</h4>
          <h4 className={styles.upcomming_lots_title}>Upcoming Lots</h4>
        </div>
      </div>

      <div
        className={[styles.product_info, styles.list, "container"].join(" ")}
      >
        <div className={styles.product_info_images}>
          <div>
            <div
              className={[styles.product_info_main_img, styles.div__Image].join(
                " "
              )}
            ></div>
            <div className={styles.product_info_images_list}>
              <img
                className={styles.product_info_images_list_item}
                src={Image1}
                alt="productimage"
              />
              <img
                className={styles.product_info_images_list_item}
                src={Image2}
                alt="productimage"
              />
              <img
                className={styles.product_info_images_list_item}
                src={Image3}
                alt="productimage"
              />
              <div
                className={styles.product_info_images_list_item}
                style={{ position: "relative" }}
              >
                <div className={styles.product_image_fone}>
                  <p>+7 photos</p>
                </div>
                <img
                  src={Image4}
                  alt="productimage"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.car_lot_information}>
          <div>
            <div className={styles.auction_layer_lot}>
              <CarInfoList classname="auction_player">
                <div
                  className={[styles.car_info_item, "shadow__Item"].join(" ")}
                >
                  <p>Vin:</p>
                  <p>1GNCS18Z3M0115561</p>
                </div>
              </CarInfoList>
              <div className={styles.auction_bid}>
                <AuctionBidTimer />
                <div className={styles.previous_bid}>
                  <div className={"title__Info__Field"}>Previous Bids</div>
                  <div className={styles.previous_bid_player_info}>
                    <div className="shadow__Item">
                      <div
                        className={styles.previous_bid_player_img}
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
                        className={styles.previous_bid_player_img}
                        style={{ background: `url(${bidPlayer2})` }}
                      ></div>
                      <div>
                        <p>
                          <FlagUAE /> UAE
                        </p>
                        <p>
                          <b>1.650$</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>3400$</p>
                  <MyButton
                    className={[styles.Bid_button, styles.btn2].join(" ")}
                  >
                    Buy It Now
                  </MyButton>
                </div>
              </div>
            </div>
            <UpcommingLotsList />
          </div>
          <Files />
        </div>
      </div>
    </div>
  );
};

export default AuctionPlayer;
