import React from "react";
import "./Css/CauseTemp.css";

function CauseTamp({ myIcon, title, text, btn }) {
  return (
    <div className="lb_CauseTamp_wrapper">
      <div className="card lb_cardTemp z-depth-0">
        <div class="card-image">
          <p className="center">
            <i class={myIcon}></i>
          </p>
        </div>

        <div className="card-content">
          <span className="card-title"> {title}</span>
          <p>{text}</p>
        </div>
        <div className="center">
          <a className="waves-effect waves-light btn-large" href="#">
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CauseTamp;
