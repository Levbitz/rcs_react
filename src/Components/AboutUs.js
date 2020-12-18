import React from "react";
import "../Components/Reuseable/Css/About.css";
import Footer from "./Reuseable/Footer";
import Horizontal from "./Reuseable/Horizontal";
import MyVideo from "./Reuseable/MyVideo";
import OurValues from "./Reuseable/OurValues";

//main page css
import "./MainCss/AboutPage.css";

function About() {
  return (
    <div>
      <div className="about_wrapper">
        <div className="container ">
          <div className="row">
            <div className="col l6 s9 white my_about_content">
              <h3 className="text-black ">About Us</h3>
              <h5>
                Sightsavers is an international organisation that works with
                partners in more than 30 countries to eliminate avoidable
                blindness, and fight for the rights and needs of people with
                disability.
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/**about text */}
      <div className="white lb_aboutHistory">
        <div className="container">
          <div className="row">
            <div className="col l3 s12">
              <h4>In India since 1966</h4>
            </div>
            <div className="col l8 s12 offset-l1">
              <p>
                Sightsavers’ work in India has enabled thousands of people to
                lead lives of independence and dignity. We have been working
                with local partners to strengthen organisations and communities,
                and have supported the treatment of millions of people with eye
                disorders. We have educated, counseled, trained and
                rehabilitated people who are visually impaired or blind, and
                helped extend the reach of eye services to the least served
                areas of India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/**about text */}

      {/*video video video */}
      <div className="white">
        <div className="container ">
          <h2 className="left flow-text">see what we are doing</h2>
          <div className="row">
            <div className="col">
              <MyVideo />
            </div>
          </div>
        </div>
      </div>
      {/*video video video */}
      <div className="lb_ourvalue_wrapper">
        <div className="container">
          <div className="row">
            <div className="col l4 s12">
              <OurValues
                title="Protecting sight"
                text="Blindness is an important cause and the effect of poverty. We work with poor and marginalised communities in developing countries. At Sightsavers, we believe that people should not go blind unnecessarily. We prevent, treat and cure avoidable blindness and promote eye health."
              />
            </div>
            <div className="col l4 s12">
              <OurValues
                title="Equal opportunities"
                text="
People with visual impairment should be able to develop their potential to the full. We work with disabled people and others to promote equal rights and opportunities. We strengthen organisations and communities to develop practical and enduring solutions.

"
              />
            </div>
            <div className="col l4 s12">
              <OurValues
                title="Collaboration"
                text="We achieve much more when we collaborate. We forge alliances and partnerships to ensure a positive and long term impact on people’s lives. Our supporters are a key part of the solution. We work together to accomplish our goals."
              />
            </div>
          </div>
        </div>
      </div>

      <Horizontal />

      <Footer />
    </div>
  );
}

export default About;
