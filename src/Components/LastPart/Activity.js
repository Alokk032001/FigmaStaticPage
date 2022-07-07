import React from "react";
import { ReactComponent as ActIndicator } from "../../assets/indicator.svg";
import ActivityBox from "./ActivityBox";
import "./Activity.css";
const Activity = () => {
  return (
    <>
      <div className="activity d-flex justify-content-between align-items-center">
        <div className="activity-title">Activity</div>
        <div className="activity-viewall">
          View All Projects <ActIndicator />
        </div>
      </div>
      <div>
        <ActivityBox />
      </div>
    </>
  );
};

export default Activity;
