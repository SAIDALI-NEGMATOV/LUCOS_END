import React, { Component } from "react";
import "./Content.css";
import restangle from "../Images/Rectangle 10 (1).png";
import krug from "../Images/krug.png"
import play from '../Images/play.png'
class Content extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-column align-items-center">
          <h2 className=" fs-1 fw-bold">How it works</h2>
          <p className=" fs-6 font-monospace">
            Spice up your space even simpler than you think
          </p>
        </div>
        <div className="col-12 d-flex mt-5">
          <div className="col-7 position-relative">
            <img src={restangle} alt="" className=" h-75 w-100" />
            <img src={krug} alt="" className=" position-absolute z-1 img "/>
            <img src={play} alt="" className=" position-absolute z-2 img_one"/>
          </div>
          <div className="col-5 bcg_color h-75 d-flex flex-column justify-content-center align-items-center p-5">
            <div className="col w-50 d-flex justify-content-center flex-column">
              <p>
                We provide design and build for commercial building, interior
                and furniture to improve the better life.
              </p>
              <b>S E E V I D E O</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
