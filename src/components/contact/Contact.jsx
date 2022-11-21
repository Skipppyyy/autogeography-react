import React from 'react';
import './contactstyles.css';

const Contact = () => {
    return (
        <div name='contact' className='contact'>
            <div className='container'>
                <div className='top'> 
                    <h1>Contact</h1>
                </div>
                <div className='bottom'>
                    <button className='btn btn-dark'>Drive</button>
                    <button className='btn'>Ride</button>
                </div>
            </div>
        </div>
    )
}

export default Contact; 