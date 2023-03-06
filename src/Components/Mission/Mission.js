import React, { Component } from 'react';
import './Mission.css'
import chess from "../Images/chess.jpg"

class Mission extends Component {
    render() {
        return (
            <div className='row mt-5 d-flex gap-5'>
                <div className="col-6 h-75">
                    <img src={chess} alt="" className='h-75'/>
                </div>
                <div className="col-5 d-flex justify-content-center flex-column align-items-center">
                    <h2 className=' mb-4 tex_h2 fs-1 fw-semibold fw-bold lh-1'>Our mission is to deliver aesthetic visual for your home</h2>
                    <p className=' tex_p font-monospace fst-normal fs-5 lh-1'>By applying bacis psychology principles, we are going to explain how perception works and how we can use this understanding to maximise the space that we occupy in our homes.</p>
                </div>
            </div>
        );
    }
}

export default Mission;
