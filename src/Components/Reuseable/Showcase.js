import React from "react";
import "./Css/Showcase.css";
import Horizontal from "./Horizontal";

function Showcase() {
  return (
    <div>
      <div className="Showcase_wrapper">
        <div className="container ">
          <div className="row">
            <div className="col l6 s9 white my_showcase_content">
              <h2 className="text-black ">
                Protecting sight and fighting for disability rights
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Horizontal />
    </div>
  );
}

export default Showcase;
