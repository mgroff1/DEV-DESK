import React, { useState } from "react";
import FormStatus from "./FormStatus";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import { Link } from "./../util/router.js";


function Auth(props) {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [showErrors, setShowErrors] = useState(false);

  let errors = [];

  const getError = field => {
    return errors.find(e => e.field === field);
  };

  const isEmpty = val => val.trim() === "";

  if (["signin", "signup", "forgotpass"].includes(props.mode)) {
    if (isEmpty(email)) {
      errors.push({
        field: "email",
        message: "Please enter an email"
      });
    }
  }

  if (["signin", "signup", "changepass"].includes(props.mode)) {
    if (isEmpty(pass)) {
      errors.push({
        field: "pass",
        message: "Please enter a password"
      });
    }
  }

  if (["signup", "changepass"].includes(props.mode)) {
    if (isEmpty(confirmPass)) {
      errors.push({
        field: "confirmPass",
        message: "Please confirm password"
      });
    } else if (pass !== confirmPass) {
      errors.push({
        field: "confirmPass",
        message: `This doesn't match your password`
      });
    }
  }

  const handleSubmit = () => {

    if (errors.length) {
      setShowErrors(true);
    } else {

      if (props.onSubmit) {
        props.onSubmit({
          email,
          pass
        });
      }
    }
  };

  return (
    <div className="Auth">
      {props.status && props.status.message && (
        <FormStatus
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
        {["signup", "signin", "forgotpass"].includes(props.mode) && (
          <FormField
            value={email}
            type="email"
            placeholder="Email"
            error={showErrors && getError("email")}
            onChange={value => setEmail(value)}
          ></FormField>
        )}

        {["signup", "signin", "changepass"].includes(props.mode) && (
          <FormField
            value={pass}
            type="password"
            placeholder="Password"
            error={showErrors && getError("pass")}
            onChange={value => setPass(value)}
          ></FormField>
        )}

        {["signup", "changepass"].includes(props.mode) && (
          <FormField
            value={confirmPass}
            type="password"
            placeholder="Confirm Password"
            error={showErrors && getError("confirmPass")}
            onChange={value => setConfirmPass(value)}
          ></FormField>
        )}

        <div className="field">
          <p className="control ">
            <SectionButton
              parentColor={props.parentColor}
              size="medium"
              fullWidth={true}
              state={
                props.status && props.status.type === "pending"
                  ? "loading"
                  : "normal"
              }
            >
              {props.buttonText}
            </SectionButton>
          </p>
        </div>

        {["signup", "signin"].includes(props.mode) && (
          <div className="Auth__bottom-link has-text-centered">
            {props.mode === "signup" && (
              <>
                Have an account already?
                <Link to="/signin">Sign in</Link>
              </>
            )}

            {props.mode === "signin" && (
              <>
                <Link to="/signup">Create an account</Link>
                <Link to="/forgotpass">Forgot password</Link>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default Auth;
