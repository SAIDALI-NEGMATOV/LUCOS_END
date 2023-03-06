import React, { Component } from "react";
import "./test.css";
import java from "../Images/java.jpg";
import zalora from "../Images/zalora.jpg";
import stave from "../Images/may.jpg";
import jabs from "../Images/ok.jpg";

class Test extends Component {
  render() {
    return (
        <div className="row flex-column mt-5">
            <div className="col d-flex justify-content-center "> <h1 className=" fst-normal fw-bolder lh-1 ">Testimonial</h1></div>
           
      <div className="col mt-5 d-flex justify-content-between align-items-center g-1">
        <div className="col-3">
          <img src={jabs} alt="" />
        </div>
        <div className="col-3">
          <img src={stave} alt="" />
        </div>
        <div className="col-3">
            <img src={zalora} alt="" />
        </div>
        <div className="col-3">
            <img src={java} alt="" />
        </div>
      </div>
        </div>
    );
  }
}

export default Test;
