import React from "react";

function SectionHeader(props) {
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <div>
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1 className ="main-header ">
          {props.title}
        </h1>
      )}

      {props.subtitle && (
        <p className={"subtitle" + (props.size > 4 ? " is-6" : "")}>
          <span >{props.subtitle}</span>
        </p>
      )}
    </header>
      </div>
  );
}

export default SectionHeader;
