import React from "react";
import { Link } from "./../util/router.js";
import ForgotPassSection from "./../components/ForgotPassSection";

function ForgotpassPage(props) {
  return (
    <>


      <ForgotPassSection
        color="white"
        size="medium"
        title="Get a new password"
        subtitle=""
        buttonText="Reset password"
      ></ForgotPassSection>
      <Link className="link" to="/">
        Back
      </Link>
    </>
  );
}

export default ForgotpassPage;
