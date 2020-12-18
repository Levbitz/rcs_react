import React, { useState } from "react";

import { HighlightData } from "../Data/HighlightsData";
//css
import "./Css/Highlights.css";

function Highlights() {
  const [highLights] = useState(HighlightData);
  return (
    <div className="white  lb_highlights_wrapper">
      <div className="container ">
        <div className="row">
          <div className="col s12 l5 lb_content_one_wrapper ">
            <div className="lb_content_one">
              <h4 className="text-flow">
                Sightsavers India gets Great Place to Work-Certified™ for second
                year in a row
              </h4>
              <p>
                Sightsavers India also known as Royal Commonwealth Society for
                the Blind has been once more certified as Great Place to
                Work-Certified™ from June 2020 until May 2021.
              </p>
              <div className="lb_highlightbtn_wrapper">
                <a href="hvhvh" className="waves-effect waves-light btn indigo">
                  Button
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 l6 offset-l1">
            <div className="content_two">
              <h5 className="header center text-indigo">Horizontal Card</h5>

              {highLights.map(function (highlight) {
                const { id, img, title, body } = highlight;
                return (
                  <div key={id} className="card horizontal lb_highlight_card">
                    <div className="card-image">
                      <img className="lb_highlight_image" src={img} alt="" />
                    </div>
                    <div className="card-stacked grey lighten-2">
                      <div className="card-content lb_card_content ">
                        <span className="card-title center">{title}</span>
                        <p className="trancate right">{body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
