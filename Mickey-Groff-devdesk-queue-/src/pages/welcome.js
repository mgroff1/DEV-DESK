import React from "react";
import Section from "./../components/Section";
import {HomePage} from "../assets/images";
import home from "../assets/home.png";
import {Icons} from "../components/SocialIcons";
import {Facebook,Twitter,GitHub,LinkedIn} from "./../assets/images";
function WelcomePage(props) {


  return (

    <div className="mycard">
    <img className="bgimg bground" src={home}/>
      <header>

      </header>

        <div className="main-area">
  <Icons/>
      </div>


    </div>
  );
}

export default WelcomePage;
