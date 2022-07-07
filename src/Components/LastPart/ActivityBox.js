import React from "react";
import { ReactComponent as Profile1 } from "../../assets/recentp1.svg";
import { ReactComponent as Profile2 } from "../../assets/recentp2.svg";
import { ReactComponent as Profile3 } from "../../assets/recentp3.svg";
import { ReactComponent as Dollar } from "../../assets/dollar.svg";
import "./ActivityBox.css";
const ActivityBox = () => {
  return (
    <>
      <div className="recentbox">
        <p className="recent-title">Recent</p>
        <div className="recent-profile1-align">
          <div className="recent-profile1">
            <Dollar />
            <Profile1 />
          </div>
          <div className="recent-profile1-content">
            <div className="recent-name">Daniel Belu</div>
            <div className="recent-para">Recieved $760 for a ruby project.</div>
            <div className="recent-crypto">
              <div style={{ marginLeft: "10px" }} className="recent-ethereum">
                1.2 ETH
              </div>
              <div
                style={{ marginLeft: "7px", paddingRight: "22px" }}
                className="recent-dollar"
              >
                $760
              </div>
            </div>
          </div>
          <div className="recent-time ml-auto">1 hour ago</div>
        </div>
        <div className="recent-profile1-align">
          <div className="recent-profile1">
            <Dollar />
            <Profile2 />
          </div>
          <div className="recent-profile1-content">
            <div className="recent-data">
              <div className="recent-name">Christophe F. Batista</div>
              <div className="recent-para">
                Recieved $620 for a html project.
              </div>
              <div className="recent-crypto">
                <div style={{ marginLeft: "10px" }} className="recent-bitcoin">
                  0.2 BTC
                </div>
                <div
                  style={{ marginLeft: "7px", paddingRight: "22px" }}
                  className="recent-dollar"
                >
                  $620
                </div>
              </div>
            </div>
          </div>
          <div className="recent-time">3 hours ago</div>
        </div>
        <div className="recent-profile1-align">
          <div className="recent-profile1">
            <Dollar />
            <Profile3 />
          </div>
          <div className="recent-profile1-content">
            <div className="recent-data">
              <div className="recent-name">Alice Martin</div>
              <div className="recent-para">Submitted a project in html.</div>
              <div className="recent-crypto">
                <div style={{ marginLeft: "10px" }} className="recent-bitcoin">
                  0.3 BTC
                </div>
                <div style={{ marginLeft: "13px" }} className="recent-dollar">
                  $760
                </div>
              </div>
            </div>
          </div>
          <div className="recent-time">5 hours ago</div>
        </div>
      </div>
    </>
  );
};

export default ActivityBox;
