import { NextButton, PrevButton } from "../../assets";
import "./HomePageSlider.scss";

const HomePageSlider = () => {
  return (
    <div className="home_pages_slider">
      <div className="home_page_main_slider_item">
        <div className="slider_item_img "></div>
        <div className="slider_item_mask"></div>
        <div className="container">
          <h4 className="slider_content">Lorem ipsum</h4>
          <PrevButton classname="prev" />
          <NextButton classname="next" />
        </div>
      </div>
    </div>
  );
};

export default HomePageSlider;
