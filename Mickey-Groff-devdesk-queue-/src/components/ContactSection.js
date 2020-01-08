import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact";

function ContactSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
    >
      <div className="ContactSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        ></SectionHeader>
        <Contact
          parentColor={props.color}
          showNameField={props.showNameField}
          buttonText={props.buttonText}
        ></Contact>
      </div>
    </Section>
  );
}

export default ContactSection;
