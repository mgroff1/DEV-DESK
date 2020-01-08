import React from "react";
import { Link } from "./../util/router.js";
import ContactSection from "./../components/ContactSection";
import {Headerlogo} from "./../assets/LambdaImg";
function ContactPage(props) {
  console.log({Headerlogo})
  return (
    <>


      <ContactSection
        size="medium"
        title="Submit A Ticket Here"
        subtitle="We Thank You For Your Input!"
        buttonText="Send message"
        showNameField={true}
      ></ContactSection>
      <Link className="link" to="/">
        Back
      </Link>
    </>
  );
}

export default ContactPage;
