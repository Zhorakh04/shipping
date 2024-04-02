import MyInput from "../../Ui/customUi/MyInput/MyInput";
import MyButton from "../../Ui/customUi/MyButton/MyButton";
import styles from "./BidInfoList.module.scss";
import { Union } from "../../../assets";

const BidInfo = ({ active }: any) => {
  return (
    <div className={styles.bid_Information_List}>
      {!active && (
        <>
          <div
            className={[
              styles.title__Info__Field,
              styles.bid_Information_title,
            ].join(" ")}
          >
            Bid information
          </div>

          <div className={["car_info_item", "shadow__Item"].join(" ")}>
            <p>Bid Status:</p>
          </div>
          <div className={["car_info_item", "shadow__Item"].join(" ")}>
            Minimum Bid:
          </div>
        </>
      )}
      <div
        className={["shadow__Item", styles.car_info_item, styles.Bid_form].join(
          " "
        )}
      >
        <div>
          {active && <Union />}
          <div className={styles.bid__current_bid}>
            <p>Current Bid:</p>
            <p>$0</p>
          </div>
          <p className={styles.max_bid}>Your Max Bid:</p>
        </div>
        <div className={styles.bid__buy_item}>
          <span>$</span>
          <MyInput placeholder="400" />
        </div>
        <MyButton className={"bid_button btn1"}>Bid Now</MyButton>
        <div>
          <p className={styles.bid_price}>$3.400</p>
          <MyButton className={[styles.bid_button, "buy_button"].join(" ")}>
            Buy It Now
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default BidInfo;
