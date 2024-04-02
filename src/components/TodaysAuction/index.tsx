import styles from "./TodaysAuction.module.scss";
import { FlagGeorgia } from "../../assets/";

const TodaysAuction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.auction_sale_time}>
        <p className={styles.auction_item_title}>
          Sale Time <span className={styles.auctin_item_style}>:</span>
        </p>
        <div
          className={[
            styles.auction_sale_time_info,
            styles.todays_auction_info,
          ].join(" ")}
        >
          <time>11:00 PM</time>
          <p>LIVE NOW</p>
        </div>
      </div>
      <div className={styles.auction_sale_name}>
        <p className={styles.auction_item_title}>
          Sale Name <span className={styles.auctin_item_style}>:</span>
        </p>
        <div className={styles.todays_auction_info}>
          <p className={styles.autction_sale_name_info}>
            <FlagGeorgia />
            <span>Georgia</span>
          </p>
        </div>
      </div>
      <div className={styles.auction_sale_items}>
        <p className={styles.auction_item_title}>
          Items<span className={styles.auctin_item_style}>:</span>
        </p>
        <div className={styles.todays_auction_info}>
          <p>67</p>
        </div>
      </div>
      <div className={styles.auction_sale_action}>
        <p className={styles.auction_item_title}>
          Action <span>:</span>
        </p>
        <div
          className={[
            styles.auction_action_info,
            styles.todays_auction_info,
          ].join(" ")}
        >
          <button>Join Auction</button>
          <p>View sale list</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysAuction;
