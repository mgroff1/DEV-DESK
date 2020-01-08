import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SignUp from "./SignUp";
import { useRouter,Link } from "./../util/router.js";

function SignUpSection(props) {
  const router = useRouter();

  const onSignup = () => {
    router.push("/");
  };

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
        <SignUp
          buttonText={props.buttonText}
          parentColor={props.color}
          onSignup={onSignup}
        ></SignUp>
        <Link className="link" to="/">
          Back
        </Link>
      </div>
    </Section>
  );
}

export default SignUpSection;
