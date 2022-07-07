import React from "react";
import Activity from "./Activity";
import ActivityBox from "./ActivityBox";
import RankingsBox from "./RankingsBox";
// import ActivityBox from "./ActivityBox";
import TopEarners from "./TopEarners";
const LastPart = () => {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <ActivityBox />
        </div>
        <div className="col-4">
          <RankingsBox />
        </div>
      </div>
    </>
  );
};

export default LastPart;
