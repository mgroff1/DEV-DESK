import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SignIn from "./SignIn";
import { useRouter,Link } from "./../util/router.js";

function SignInSection(props) {
  const router = useRouter();

  // Go to page after signin
  const onSignin = () => {
    router.push("/welcome");
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
        <SignIn

          buttonText={props.buttonText}
          parentColor={props.color}
          onSignin={onSignin}
        ></SignIn>
        <Link className="link" to="/">
          Back
        </Link>
      </div>

    </Section>
  );
}

export default SignInSection;
