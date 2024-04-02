import { useState } from "react";
import { ProductHeader } from "../index";
import { Image1, Image2, Image3, Image4 } from "../../assets/";
import styles from "./ProductItem.module.scss";
import BidInfo from "./BidInformation";
import CarInfoList from "./CarInfoList";
import FlagGeorgia from "../../assets/Icons/FlagGeorgia";
import Files from "./Files/";

const headerInfo = [
  { infoType: "Lot", productInfo: "12345678" },
  { infoType: "Sale Location", productInfo: "Georgia" },
  { infoType: "Sale Date", productInfo: "Tomorrow/May 28/2020 - 04:00 AM" },
];

const ProductItem = () => {
  const [active, setActive] = useState<boolean>(false);

  const onChange = (event: boolean) => {
    setActive(event);
  };

  return (
    <div className="container">
      <ProductHeader
        info={headerInfo}
        onChange={onChange}
        productIsActive={active}
      />
      <div className={styles.product_info}>
        <div className={styles.product_info_image}>
          <div>
            <div
              className={[styles.product_info_main_img, "div__Image"].join(" ")}
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
              {active && <img src={Image2} alt="productimage" />}
            </div>
          </div>
        </div>
        <div className={styles.car_lot_information}>
          <div>
            <div className={styles.info_types}>
              <div
                className={[
                  styles.title__Info__Field,
                  styles.info_type,
                  styles.active,
                ].join(" ")}
              >
                Lot: #12345678
              </div>
              <div
                className={[
                  styles.title__Info__Field,
                  styles.info_type,
                  styles.title__Info__Field_more,
                ].join(" ")}
              >
                More Information
              </div>
            </div>
            <CarInfoList headerInfo={headerInfo} active={active} />
          </div>
          <Files />
        </div>
        <div className={styles.bid_Information}>
          <BidInfo active={active} />
          <div className={styles.sale_Information}>
            <div className={styles.title__Info__Field}>Sale Inforamation</div>
            <div className={[styles.car_info_item, "shadow__Item"].join(" ")}>
              <p>Sale Inforamation</p>
              <p>
                <FlagGeorgia /> Georgia
              </p>
            </div>
            <div className={[styles.car_info_item, "shadow__Item"].join(" ")}>
              <p>Address:</p>
              <p>45, Kote Aphkhazi Str, 45 Kote Afkhazi St, Tbilisi 0105</p>
            </div>
            <div className={[styles.car_info_item, "shadow__Item"].join(" ")}>
              <p>Mail:</p>
              <p>globalshipping@gmail.com</p>
            </div>
            <div className={[styles.car_info_item, "shadow__Item"].join(" ")}>
              <p>Ph. Number:</p>
              <p>+995 350 223 334</p>
            </div>
            <div className={[styles.car_info_item, "shadow__Item"].join(" ")}>
              <p>Time Number:</p>
              <p className={styles.time_number}>0d 24h 1min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
