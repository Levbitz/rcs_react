import React from "react";

import { Link } from "react-router-dom";
//import About from "./About"

function Navbar() {
  return (
    <div className="">
      <nav className="">
        <div className="nav-wrapper   indigo">
          <div className="container">
            <a href="#" className="brand-logo left ">
              Logooo
            </a>
            <a
              href="#"
              className="sidenav-trigger right"
              data-target="mobile-links"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/cause">Cause</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>

              <li>
                <Link
                  to="/donate"
                  className="waves-effect waves-light btn red z-depth-0"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav sidenav-close indigo" id="mobile-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>

        <li>
          <Link to="/cause">Cause</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>

        <li>
          <Link
            to="/donate"
            className="waves-effect waves-light btn red z-depth-0"
          >
            Donate
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
