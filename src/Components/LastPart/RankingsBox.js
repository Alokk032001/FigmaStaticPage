import React from "react";
import { ReactComponent as RankProfile1 } from "../../assets/rankp1.svg";
import { ReactComponent as RankProfile2 } from "../../assets/rankp2.svg";
import { ReactComponent as RankProfile3 } from "../../assets/rankp3.svg";
import { ReactComponent as RankProfile4 } from "../../assets/rankp4.svg";
import "./RankingsBox.css";
const RankingsBox = () => {
  return (
    <div className="Rankings-Box">
      <div className="rankings-box ">
        <div className="rankings-left">
          <div className="rankings-title">Rankings</div>
        </div>
        <div className="rankings-right">
          <div className="this-month">This Month</div>
          <div className="all-time">All Time</div>
        </div>
      </div>
      <div className="rank-p1-align">
        <p className="sn">1.</p>
        <div className="rank-p1">
          <RankProfile1 />
        </div>
        <div className="rank-p1-content">
          <p className="rank-p1-name">
            Mathew John
            <p className="rank-p1-amount">$10938.34</p>
          </p>
        </div>
      </div>
      <hr className="rankings-line"></hr>
      <div className="rank-p2-align">
        <p className="sn">2.</p>
        <div className="rank-p1">
          <RankProfile2 />
        </div>
        <div className="rank-p1-content">
          <p className="rank-p1-name">
            Daniel Belu
            <p className="rank-p1-amount">$9087.10</p>
          </p>
        </div>
      </div>
      <hr className="rankings-line"></hr>
      <div className="rank-p2-align">
        <p className="sn">3.</p>
        <div className="rank-p1">
          <RankProfile3 />
        </div>
        <div className="rank-p1-content">
          <p className="rank-p1-name">
            Elizabeth Kin
            <p className="rank-p1-amount">$6789.90</p>
          </p>
        </div>
      </div>
      <hr className="rankings-line"></hr>
      <div className="rank-p2-align">
        <p className="sn">4.</p>
        <div className="rank-p1">
          <RankProfile4 />
        </div>
        <div className="rank-p1-content">
          <p className="rank-p1-name">
            Arosuh Uyt
            <p className="rank-p1-amount">$6009.00</p>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RankingsBox;
