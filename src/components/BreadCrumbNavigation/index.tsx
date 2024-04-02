import LeftSvg from "../../assets/Icons/LeftSvg";
import RightSvg from "../../assets/Icons/RightSvg";
import MyButton from "../Ui/customUi/MyButton/MyButton";
import "./Breadcrumbnavigation.scss";

const BreadcrumbNavigation = () => {
  return (
    <div className="breadcrumb_navigation container">
      <div>
        <div className="breadcrumb_navigation_list">
          <MyButton className="breadcrumb_navigation_item">Home</MyButton>
          <MyButton className="breadcrumb_navigation_item">
            Auction Calendar
          </MyButton>
          <MyButton className="breadcrumb_navigation_item">
            <span>
              <RightSvg />
            </span>
            Sale List for Georgia
          </MyButton>
          <MyButton className="breadcrumb_navigation_item">
            2014 - BMW 3er Touring
          </MyButton>
        </div>
        <div className="navigatinoBtns">
          <MyButton className={"navigationPrev"} disabled>
            <span className="icon">
              <RightSvg />
            </span>
            <span className="textButton">
              Previous <span>Item</span>
            </span>
          </MyButton>
          <MyButton className={"navigation"}>
            <span className="textButton">
              Next <span>Item</span>
            </span>
            <span className="icon">
              <LeftSvg />
            </span>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNavigation;
