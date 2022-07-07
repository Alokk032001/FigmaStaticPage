import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as Arrow } from "../assets/sidearrow.svg";
import "./Rank.css";
const Rank = () => {
  return (
    <>
      <div className="about-rank">
        <div className="rank-top-part">
          <div className="partOne">
            <div className="Rank">Rank</div>
            <div className="symbol-nos">
              <Star />
              <div className="num">607</div>
            </div>
            <div className="top">
              You're in top <span style={{ color: " #10c176" }}>40%</span>
            </div>
          </div>
          <div className="partTwo">
            <div className="Rank">Projects</div>
            <div className="symbol-nos">
              <Arrow />
              <span className="num">45</span>
            </div>
            <div className="top">
              <span style={{ color: " #10c176" }}>10</span> in this month
            </div>
          </div>
        </div>
        <hr className="rank-line"></hr>
        <div className="parttwo">
          <div className="topCategories">Top Categories</div>
          <div className="lang-ovals">
            <span className="ruby">ruby</span>
            <span style={{ marginLeft: "10px" }} className="ruby">
              clojure
            </span>
            <span style={{ marginLeft: "10px" }} className="ruby">
              java
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank;
