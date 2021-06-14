import React from 'react';
import './Features.css'
import featuresImage from '../../../Assets/onlineEducation.jpg'

const Features = () => {
    return (
        <div className="features-container py-5 container">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <h1>Learn Without Limits</h1>
                    <h6 className="py-3">Build skills with courses, certificates, and degrees online from world-class universities and companies.</h6>
                    <button className="btn btn-info">Join For Free</button>
                </div>
                <div className="col-md-6">
                    <img src={featuresImage} className="img-fluid rounded" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Features;