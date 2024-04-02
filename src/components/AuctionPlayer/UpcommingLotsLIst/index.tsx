import { useState } from "react";
import MyButton from "../../Ui/customUi/MyButton/MyButton";
import classNames from "classnames";
import {
  Image1,
  upcomingCars2,
  upcomingCars3,
  upcomingCars4,
} from "../../../assets/index";
import styles from "./UpcommingLots.module.scss";

const UpcommingLotsList = () => {
  const [active, setActive] = useState<boolean>(false);

  const activeHandler = () => {
    setActive(!active);
  };

  return (
    <div className={styles.upcomming_lots}>
      <p
        className={[styles.upcomming_lots_title, "shadow__Item"].join(" ")}
        onClick={activeHandler}
      >
        Upcomming Lots
      </p>
      <div className={styles.upcomming_lots_list}>
        <div className={[styles.upcomming_lots_item, "shadow__Item"].join(" ")}>
          <div
            style={{
              background: `url(${Image1})`,
            }}
            className={styles.upcomming_lots_item_image}
          >
            <MyButton className={styles.upcomming_lots_item_btn}>Next</MyButton>
          </div>

          <div className={styles.upcomming_lots_item_info}>
            <p className={styles.upcomming_lots_item_title}>
              2014 - BMW 3er Touring
            </p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
        <div className={[styles.upcomming_lots_item, "shadow__Item"].join(" ")}>
          <div
            style={{
              background: `url(${upcomingCars2})`,
            }}
            className={styles.upcomming_lots_item_image}
          >
            <MyButton className={styles.upcomming_lots_item_btn}>Next</MyButton>
          </div>

          <div className={styles.upcomming_lots_item_info}>
            <p className={styles.upcomming_lots_item_title}>
              2013 - Mercedes Benz GLC
            </p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
        <div className={[styles.upcomming_lots_item, "shadow__Item"].join(" ")}>
          <div
            style={{
              background: `url(${upcomingCars3})`,
            }}
            className={styles.upcomming_lots_item_image}
          >
            <MyButton className={styles.upcomming_lots_item_btn}>Next</MyButton>
          </div>

          <div className={styles.upcomming_lots_item_info}>
            <p className={styles.upcomming_lots_item_title}>
              2019 - Toyota Corolla
            </p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
        <div className={[styles.upcomming_lots_item, "shadow__Item"].join(" ")}>
          <div
            style={{
              background: `url(${upcomingCars4})`,
            }}
            className={styles.upcomming_lots_item_image}
          >
            <MyButton className={styles.upcomming_lots_item_btn}>Next</MyButton>
          </div>
          <div className={styles.upcomming_lots_item_info}>
            <p className={styles.upcomming_lots_item_title}>
              2019 - BMW 1er Lim
            </p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingLotsList;
