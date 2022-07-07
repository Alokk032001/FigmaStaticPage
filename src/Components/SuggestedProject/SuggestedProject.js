import React from "react";
import { ReactComponent as Indicator } from "../../assets/indicator.svg";
import Cards from "./Cards.js";
import "./SuggestedP.css";
const SuggestedProject = () => {
  return (
    <div class="row">
      <div className="col-lg-12 col-md-8 col-xs-6 ">
        <div className="d-flex justify-content-between suggest">
          <div className="sp">SuggestedProject</div>
          <div className="viewall">
            View All Projects <Indicator />
          </div>
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default SuggestedProject;
