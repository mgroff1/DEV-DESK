import React from "react";
import "./Form.scss";
function FormField(props) {
  return (
    <div className="myfield">
      <div className="mycontrol">
        {props.type === "textarea" && (
          <textarea
            className="myarea"
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value)}
          ></textarea>
        )}

        {props.type !== "textarea" && (
          <input
          id="input"
            className="myinput"
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value)}
          ></input>
        )}
      </div>

      {props.error && <p className="help is-danger">{props.error.message}</p>}
    </div>
  );
}

export default FormField;
