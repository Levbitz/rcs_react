import React from "react";
import "./Css/Horizontal.css";

function Horizontal() {
  return (
    <div className="deep-purple darken-4 wrapper section">
      <div className="container">
        <div className="row">
          <div className="col  s12 l6">
            <h4 className="white-text ">
              75% of sight loss can be cured or prevented
            </h4>
            <hr className="red" />
          </div>
          <div className="col s6 l4 offset-l2">
            <h4 className="white-text">
              <a href="#" className="waves-effect waves-light btn-large">
                button
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horizontal;
