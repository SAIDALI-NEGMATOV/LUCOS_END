import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="row w-100 hegth d-flex justify-justify-content-between ">
        <div className="col-3 h-50 mt-5 ms-5 me-5">
          <h2>Contact Us</h2>
          <p>Have any questions? Want help before getting started?</p>
          <hr />
          <hr />
        </div>
        <div className="col-7 border h-50 border-1 mt-5">
            <p className="mb-3 mt-3">FUll NAME</p>
            <hr />
            <p>Email adress</p>
            <hr />
            <div className="col-12 d-flex justify-content-between">
            <p>Description</p>
            <button className="but border-0">Send now</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;
