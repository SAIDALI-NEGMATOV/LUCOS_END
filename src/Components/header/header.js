import React, { Component } from "react";
import "./Header.css";
import bcg from "../Images/bcg.png";
import font from "../Images/font.png";

class Header extends Component {
  render() {
    return (
      <div className="row height_one gap-5 mt-5 d-flex justify-content-center align-items-start">
        <div className="col height d-flex justify-content-center align-items-start flex-column g-1">
          <h2 className=" fs-1 font-monospace fst-normal lh-1 fw-bolder">
            Get the inspiration of interior design here
          </h2>
          <p className=" font-monospace fw-medium fs-6">
            architecture not only about engineering, it even lands to art and
            aesthetics. With us, you will get a residentical design with an
            extraordinary touch of art.
          </p>
          <button className="button_one border-0">Let’s go</button>
        </div>
        <div className="col position-relative w-100 top-0 ms-3">
          <img src={bcg} alt="" className=" position-absolute top-0 z-0 w-75" />
          <img src={font} alt="" className=" position-absolute top-0 z-1 w-75"/>
        </div>
      </div>
    );
  }
}

export default Header;
