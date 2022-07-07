import React from "react";
import { ReactComponent as Alice } from "../../assets/profileAlice.svg";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="cardone">
        <div className="Alicecard">
          <div className="image-time">
            <div className="profile">{props.img}</div>
            <div className="nametime">
              <div className="alice">{props.name}</div>
              <div className="time">{props.time}</div>
            </div>
          </div>
          <div className="langoval">
            <span className="design">{props.lang}</span>
          </div>
        </div>
        <div className="parttwo">
          <div className="paragraph">
            <div className="Alicepara">{props.para}</div>
          </div>
        </div>
        <hr className="card-line"></hr>
        <div className="partthree">
          <div className="crypto-currency">
            <span style={{ marginLeft: "10px" }} className="oneeth">
              {props.ethereum}
            </span>
            <span style={{ marginLeft: "10px" }} className="zerobtc">
              {props.bitcoin}
            </span>
          </div>
          <div className="dollar-box">
            <span className="dollar">{props.dollar}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
