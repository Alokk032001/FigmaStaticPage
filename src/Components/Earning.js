import React from "react";
import Rank from "./Rank.js";
import "./Earning.css";
import { ReactComponent as Chart } from "../assets/chart.svg";
const Earning = () => {
  return (
    <div className="row">
      <div className="about-earning col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <div className="earning-whole-box">
          <div className="earning-heading">Earnings</div>
          <div className="Earning">
            <div className="earning-nos">
              <div className="earning-amount">$2878.90</div>
              <div className="earning-para">
                <span id="no">+42</span> since last week
              </div>
            </div>
            <div className="earning-dc">
              <div className="blue-eth">0.9087 ETH</div>
              <div className="orange-btc">0.5 BTC</div>
            </div>
          </div>
          <div className="chart">
            <Chart className="chart-image" />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-8 col-sm-12">
        <Rank />
      </div>
    </div>
  );
};

export default Earning;
