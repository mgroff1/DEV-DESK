import React from "react";
import { Link } from "./../util/router.js";
import SignUpSection from "./../components/SignUpSection";

function SignupPage(props) {
  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <SignUpSection
        title="No Account, Create One Here!"
        subtitle=""
        buttonText="Sign up"
      ></SignUpSection>
    </>
  );
}

export default SignupPage;
