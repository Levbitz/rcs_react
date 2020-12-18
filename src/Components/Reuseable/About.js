import React from "react";
import Card from "./Card";

//css
import "./Css/About.css";

function About() {
  return (
    <div className="lb_about_wrapper">
      <div className="container  ">
        <div className="row">
          <div className="col s12 l5">
            <Card
              img={
                "https://www.sightsaversindia.in/wp-content/uploads/2020/10/Certificate-2020-504x288-c-default.jpg"
              }
              title={
                "Sightsavers India recognised as one of India's Best NGOs to Work for in 2020"
              }
              text={
                "Sightsavers India recognised as one of India's Best NGOs to Work for in 2020"
              }
            />
          </div>
          <div className="col s12 l3">
            <Card
              img={
                "https://www.sightsaversindia.in/wp-content/uploads/2019/02/Muskan-cataract-surgery-india-504x288-c-default.jpg"
              }
              title={"Eye Health"}
              text={
                "Preventing blindness increases access to education, employment and prosperity, and enables greater participation in civil, social and political life."
              }
            />
          </div>
          <div className="col s12 l3">
            <Card
              img={
                "https://www.sightsaversindia.in/wp-content/uploads/2019/02/Sankarlal-holding-hands-india-504x288-c-default.jpg"
              }
              title={"About Us"}
              text={
                "Sightsavers’ vision is of a world where no one is blind from avoidable causes and where people with visual impairments can participate equally in society."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
