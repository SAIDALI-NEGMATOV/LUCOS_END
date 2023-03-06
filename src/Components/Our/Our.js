import React, { Component } from "react";
import "./Our.css";
import home from "../Images/home.png";
import home2 from "../Images/home2.png";
import home3 from '../Images/home 3.png'

class Our extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center flex-column align-items-center">
          <h1 className=" fs-1 fw-bold fst-normal lh-1 ">Our project </h1>
          <p className=" fs-4 font-monospace fst-normal">
            Introducing our first official project
          </p>
          <hr className=" h_r w-25" />
          <hr className=" h_r h-25 w-25" />
          <div className="col-12 d-flex justify-content-between gap-5">
            <div className="col-4">
              <div className="col-12 d-flex justify-content-center flex-column">
                <h3 className=" fst-normal fw-bolder lh-1 fs-2">
                  Project Livingroom
                </h3>
                <p className=" text_color font-monospace fst-normal lh-1 fw-normal">
                  A simple guide to create the perfect livingro-om for . Night
                  Watc works beautifully in a wi-de gamut of arrangements.
                </p>
              </div>
              <div className="col-12">
                <img src={home} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="col-12">
                <img src={home2} alt="" />
              </div>
              <div className="col-12">
                <h3 className=" fst-normal fw-bolder lh-1 fs-2">
                  Project workspace
                </h3>
                <p className="text_color font-monospace fst-normal lh-1 fw-normal">
                  A simple guide to create the perfect livingro- om for . Night
                  Watc works beautifully in a wi- de gamut of arrangements.
                </p>
              </div>
            </div>
            <div className="col-4">
                <div className="col-12">
              <h3 className=" fst-normal fw-bolder lh-1 fs-2">Library</h3>
              <p className="text_color font-monospace fst-normal lh-1 fw-normal">
                A simple guide to create the perfect livingro- om for . Night
                Watc works beautifully in a wi- de gamut of arrangements.
              </p>
                </div>
                <div className="col-12 overflow-hidden">
                    <img src={home3} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Our;
