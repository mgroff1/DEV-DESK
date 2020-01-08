import React from "react";
import {Headerlogo} from "./../assets/LambdaImg";
import {BGround} from "./../assets/Bg";
function Section(props) {
  const {
    color,
    size,
    children,
    ...otherProps
  } = props;
  return (
    <div>

    <div className="phone">
    <Headerlogo/>
    </div>
    <BGround/>
    <section{...otherProps}>

    {props.children}

    </section>

    </div>
  );
}

export default Section;
