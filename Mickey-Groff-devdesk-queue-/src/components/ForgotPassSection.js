import React from "react";
import Section from "./Section";
import {Link } from "./../util/router.js";
import SectionHeader from "./SectionHeader";
import ForgotPass from "./ForgotPass";

function ForgotPassSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}

    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <ForgotPass
          buttonText={props.buttonText}
          parentColor={props.color}
        ></ForgotPass>
        <Link className="link" to="/">
          Back
        </Link>
      </div>
    </Section>
  );
}

export default ForgotPassSection;
