import React from "react";
import { ReactComponent as EarnerIndicator } from "../../assets/indicator.svg";
import RankingsBox from "./RankingsBox";
import "./Activity.css";
const TopEarners = () => {
  return (
    <>
      <div className="activity d-flex align-items-center justify-content-between">
        <div className="activity-title">Top Earners</div>
        <div className="activity-viewall">
          View All
          <EarnerIndicator />
        </div>
      </div>
      <div>
        <RankingsBox />
      </div>
    </>
  );
};

export default TopEarners;
