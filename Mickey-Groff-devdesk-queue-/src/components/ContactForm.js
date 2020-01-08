import React, { useState } from "react";
import FormStatus from "./FormStatus";
import FormField from "./FormField";
import SectionButton from "./SectionButton";

function ContactForm(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showErrors, setShowErrors] = useState(false);

  let errors = [];

  const getError = field => {
    return errors.find(e => e.field === field);
  };

  const isEmpty = val => val.trim() === "";

  if (isEmpty(email)) {
    errors.push({
      field: "email",
      message: "Please enter an email"
    });
  }

  if (isEmpty(message)) {
    errors.push({
      field: "message",
      message: "Please enter a message"
    });
  }

  if (props.showNameField) {
    if (isEmpty(name)) {
      errors.push({
        field: "name",
        message: "Please enter your name"
      });
    }
  }

  const handleSubmit = e => {
    if (errors.length) {
      setShowErrors(true);
    } else {
      if (props.onSubmit) {
        props.onSubmit({
          name,
          email,
          message
        });
      }
    }
  };

  return (
    <>
      {props.status && props.status.message && (
        <FormStatus
          className="status"
          type={props.status.type}
          message={props.status.message}
        ></FormStatus>
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="field is-horizontal">
          <div className="field-body">
            {props.showNameField && (
              <FormField
              className="field"
                value={name}
                type="text"
                placeholder="Name"
                error={showErrors && getError("name")}
                onChange={value => setName(value)}
              ></FormField>
            )}

            <FormField
            className="field"
              value={email}
              type="email"
              placeholder="Email"
              error={showErrors && getError("email")}
              onChange={value => setEmail(value)}
            ></FormField>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <FormField
            className="field"
              value={message}
              type="textarea"
              placeholder="Message"
              error={showErrors && getError("message")}
              onChange={value => setMessage(value)}
            ></FormField>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <SectionButton
                  className="sectionbutton"
                  size="medium"
                  state={
                    props.status && props.status.type === "pending"
                      ? "loading"
                      : "normal"
                  }
                >
                  {props.buttonText}
                </SectionButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
