/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import images from "../Images/Group 1.png";
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <div className="row mb-4">
        <div className="col d-flex justify-content-center align-items-center position-relative">
          <img src={images} alt="img" />
          <p className=" text font-monospace fs-6 lh-1 fw-normal position-absolute top-50 start-50 ms-4">
            Locus
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center position-relative">
            <a href="#" className=" text text-decoration-none mt-3 ms-3 font-monospace fw-normal">Home</a>
            <a href="#" className=" text text-decoration-none mt-3 ms-3 font-monospace fw-normal">Contact</a>
            <a href="#" className=" text text-decoration-none mt-3 ms-3 font-monospace fw-normal">Location</a>
            <a href="#" className=" text text-decoration-none mt-3 ms-3 font-monospace fw-normal">About Us</a>
        </div>
        <div className="col">
            <button className=" button rounded-1 mt-3 ms-5 border-0 ">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Nav;
