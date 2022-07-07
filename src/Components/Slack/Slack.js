import React from "react";
import { ReactComponent as SlackImage } from "../../assets/slack.svg";
import "./Slack.css";

const Slack = () => {
  return (
    <>
      <div className="slack-container d-flex align-items-center flex-wrap  col-lg-12 col-md-8 col-xs-4">
        <div className="slack-image">
          <SlackImage />
        </div>
        <div className="slack-contents">
          <div className="slack-heading">Join the conversation on Slack</div>
          <div className="slack-para">
            Stay up to date on the latest news and special Programs that only
            take place within the Slack channel
          </div>
        </div>
        <div className="both-buttons d-flex btn-group">
          <div className="slack-remind-later">
            <button className="remind-later">Remind Later</button>
          </div>
          <div className="slack-join-now">
            <button className="join-now">Join Now</button>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-12">
          <div className="slack-container">
            <div className="slack-image">
              <SlackImage />
            </div>
            <div className="slack-top">
              <div className="slack-buttons">
                <div className="slack-heading">
                  Join the conversation on Slack
                </div>
                <div className="slack-para">
                  Stay up to date on the latest news and special Programs that
                  <br></br>
                  only take place within the Slack channel
                </div>
              </div>
              <div className="slack-buttons">
                <div className="buttonplace">
                  <buttons className="remind-later">Remind Later</buttons>
                </div>
                <div className="buttonplace">
                  <buttons className="join-now">Join Now</buttons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Slack;
