import React from "react";
import bground from './bg.png';
import linkedin from './ln.png';
import github from './gh.png';
import fbook from './fb.png';
import twit from './tw.png';
import hpage from './home.png';
export const LinkedIn =()=>{
    return(
      <div className="image-cont">
      <img className="image" src={linkedin} alt="img"/>
      </div>
    )
}

export const GitHub =()=>{
    return(
      <div className="image-cont">
      <img className="image" src={github} alt="img"/>
      </div>
    )
}

export const Facebook =()=>{
    return(
      <div className="image-cont">
      <img className="image" src={fbook} alt="img"/>
      </div>
    )
}

export const Twitter =()=>{
    return(
      <div className="image-cont">
      <img className="image" src={twit} alt="img"/>
      </div>
    )
}

export const HomePage =()=>{
    return(
      <div className="image-cont">
      <img className="mainimg" src={hpage} alt="img"/>
      </div>
    )
}
