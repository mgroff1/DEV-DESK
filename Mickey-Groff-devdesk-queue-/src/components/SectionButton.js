import React from "react";

function SectionButton(props) {
  const {
    parentColor,
    size,
    state,
    fullWidth,
    ...props2
  } = props;

  return (
    <button
      className={
        "sectionbutton" }
      {...props2}
    >
      {props.children}
    </button>
  );
}

export default SectionButton;
