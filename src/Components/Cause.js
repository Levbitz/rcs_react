import React from "react";
import CauseTamp from "./Reuseable/CauseTamp";
import Footer from "./Reuseable/Footer";

function Cause() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col l5 s12">
            <CauseTamp
              myIcon="fas fa-hand-holding-medical fa-6x red-text"
              title="Health"
              text="2.5 million indians die of treatable conditions every year!. Health is a luxury which inaccessible for the health cannot be previlaged support then which access to medical help"
              btn="donate "
            />
          </div>
          <div className="col l2 s12"></div>

          <div className="col l5 s12">
            <CauseTamp
              myIcon=" fas fa-book-reader fa-6x blue-text"
              title="Education"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, nunc quis fringilla blandit, nulla tellus bibendum nunc, vel porta metus ex id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras congue mi id "
              btn="donate "
            />
          </div>
        </div>
        <div className="row">
          <div className="col l3 s12"></div>
          <div className="col l6 s12">
            <CauseTamp
              myIcon="fas fa-hands-wash fa-6x green-text"
              title="Sanitization"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, nunc quis fringilla blandit, nulla tellus bibendum nunc, vel porta metus ex id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras congue mi id felis viverra cursus. In hac habitasse platea dictumst."
              btn="donate "
            />
          </div>
          <div className="col l3 s12"></div>
        </div>
        <div className="row">
          <div className="col l5 s12">
            <CauseTamp
              myIcon="fas fa-hospital-user fa-6x yellow-text"
              title="Rehabilitation"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, nunc quis fringilla blandit, nulla tellus bibendum nunc, vel porta metus ex id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras congue mi id felis viverra cursus. In hac habitasse platea dictumst."
              btn="donate "
            />
          </div>
          <div className="col l2 s12"></div>
          <div className="col l5 s12">
            <CauseTamp
              myIcon="fas fa-hand-holding-usd fa-6x lime-text"
              title="Livelihood"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, nunc quis fringilla blandit, nulla tellus bibendum nunc, vel porta metus ex id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras congue mi id felis viverra cursus. In hac habitasse platea dictumst."
              btn="donate "
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cause;
