import PopularCars from "../../components/PopularCars";
import SoldOutCars from "../../components/SoldOutCars";
import "./Home.scss";
import HomePageSlider from "../../components/HomePageSlider";
import TodaysAuction from "../../components/TodaysAuction";

const Home = () => {
  return (
    <div>
      <HomePageSlider />
      <div className="container">
        <h3 className="h3Font">Today's Auctions</h3>
        <TodaysAuction />
        <PopularCars />
        <SoldOutCars />
      </div>
    </div>
  );
};

export default Home;
