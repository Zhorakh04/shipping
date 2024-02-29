import Star from "../Ui/Icons/Star";
import MyButton from "../Ui/customUi/MyButton";
import "./AddtoWatchlist.css";

const AddtoWatchlist = () => {
  console.log('test','to be removed')
  return (
    <div className="watchlist">
      <MyButton className={"watchlist_button"}><Star /> Add to Watchlist</MyButton>{" "}
    </div>
  );
};

export default AddtoWatchlist;
