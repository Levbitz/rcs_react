import React from "react";

function Supported() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://levbitz.com/img/banner/react-native.png" alt="" />
        <button className="halfway-fab  btn-floating pink pulse">
          <i className="material-icons">favorite</i>
        </button>
      </div>

      <div className="card-content">
        <span className="card-title">Card Title</span>
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
        <div className="lb_cardbtn_wrapper">
          <button className="waves-effect waves-light btn indigo">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Supported;
