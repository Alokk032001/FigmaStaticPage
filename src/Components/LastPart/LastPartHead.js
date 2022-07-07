import React from "react";
import Activity from "./Activity";
import TopEarners from "./TopEarners";
const LastPartHead = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <Activity />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <TopEarners />
        </div>
      </div>
    </>
  );
};

export default LastPartHead;
