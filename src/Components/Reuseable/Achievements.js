import React from "react";

import Horizontal from "./Horizontal";
import Round from "./Round";
import Supported from "./Supported";
import MyVideo from "./MyVideo";

//css
import "./Css/Achievements.css";
import "./Css/Video.css";

function Achievements() {
  return (
    <div className="white lb_achievement_wrapper">
      <div className="container">
        <h2 className="center lb_achievement_h2">what we have Achieved</h2>
        <div className="row">
          <Round />
        </div>
      </div>
      <h2 className="center  lb_achievement_h2">
        Protecting sight and fighting for disability rights
      </h2>
      {/*video video video */}
      <div className="container">
        <h2 className="left flow-text">see what we are doing</h2>
        <div className="row">
          <div className="col">
            <MyVideo />
          </div>
        </div>
      </div>
      {/*video video video */}
      <Horizontal />
      <div className="grey lighten-3">
        <div className="lb_doing_wrapper">
          <div className="container">
            <h6>People we have supported</h6>
            <div className="row">
              <div className="col l4 m6 s12">
                <Supported />
              </div>
              <div className="col l4 m6 s12">
                <Supported />
              </div>
              <div className="col l4 m6 s12">
                <Supported />
              </div>
            </div>
          </div>
        </div>
        <div className="lb_awards_wrapper">
          <div className="container">
            <h5>Awards</h5>
            <div className="row">
              <div className="col l4 m6 s12">
                <Supported />
              </div>
              <div className="col l4 m6 s12">
                <Supported />
              </div>
              <div className="col l4 m6 s12">
                <Supported />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
