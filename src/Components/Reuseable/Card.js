import React from "react";

function Card({ img, title, text }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="" />
        <a href="#" className="halfway-fab  btn-floating pink pulse">
          <i className="material-icons">favorite</i>
        </a>
      </div>

      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{text}</p>
        <div className="lb_highlightbtn_wrapper">
          <a className="waves-effect waves-light btn indigo">Button</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
