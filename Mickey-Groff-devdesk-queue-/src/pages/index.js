import React from "react";
import Navbar from "./../components/Navbar";
import {Headerlogo} from './../assets/LambdaImg';
import Section from './../components/Section';
function IndexPage(props) {
  return (
    <div id="hpage">
    <Section/>

    <Navbar
      spaced={true}
      logo={Headerlogo}
    ></Navbar>

        </div>
  );
}

export default IndexPage;
