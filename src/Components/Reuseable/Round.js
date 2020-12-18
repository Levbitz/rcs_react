import React, { useState } from "react";

import { AchievementsData } from "../Data/AchievementData";
//css
import "./Css/Round.css";

function Round() {
  const [achiev] = useState(AchievementsData);
  return (
    <div>
      {achiev.map(function (data) {
        const { id, num, body } = data;
        return (
          <div key={id} className="col s12 l4">
            <div className="lb_round_wrapper ">
              <div className=" ">
                <h4 className=" center yellow-text ">{num}</h4>
                <p className="center white-text">{body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Round;
