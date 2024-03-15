import React, { useEffect, useRef, useState } from "react";
import VolumeIcon from "../../Ui/Icons/VolumeIcon";
import FlagUAE from "../../Ui/Icons/FlagUAE";
import MyButton from "../../Ui/customUi/MyButton/MyButton";
import MyInput from "../../Ui/customUi/MyInput/MyInput";

const AuctionBidTimer = () => {
  const [bidValue, setBidValue] = useState<number>(1700);
  const [newBid, setNewBid] = useState(bidValue + 100);
  const ref = useRef<SVGCircleElement>(null);

  const addBidValue = () => {
    setNewBid(newBid + 100);
  };
  const lessBidValue = () => {
    setNewBid(newBid - 100);
  };

  const bid = () => {
    if (bidValue < newBid) {
      setBidValue(newBid);
      setNewBid(100 + newBid )
    }
  };

  useEffect(() => {
    console.log(ref.current?.attributes);
  }, []);

  return (
    <>
      <div className="box">
        <div className="precent">
          <div className="auction_timer">
            <svg className="timer_road">
              <circle cx="70" cy="70" r="73"></circle>
              <circle
                cx="70"
                cy="70"
                r="73"
                ref={ref}
                strokeDashoffset={445 - (400 + 87) / 100}
              ></circle>
            </svg>
            <div className="bid_player_info">
              <FlagUAE />
              <p>UAE</p>
              <p className="player_bet">${bidValue}</p>
              <p>Bid!</p>
            </div>
          </div>
        </div>
        <VolumeIcon />
      </div>
      <div className="place_a_bet">
        <MyButton className="shadow__Item" onClick={lessBidValue}>
          -
        </MyButton>
        <MyInput
          type="number"
          classname="place_a_bet_money shadow__Item"
          value={newBid}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewBid(+e.target.value);
          }}
        ></MyInput>
        <MyButton className="shadow__Item" onClick={addBidValue}>
          +
        </MyButton>
      </div>
      <MyButton className="Bid_button" onClick={bid}>
        Bid
      </MyButton>
    </>
  );
};

export default AuctionBidTimer;
