import React from 'react';
import './About.css'
import aboutImg from '../../Assets/about.jpg'

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus cum fugiat, numquam perferendis quibusdam eius deserunt unde, tempora iste laborum non laboriosam eos quos repellendus nesciunt praesentium ad sequi sit consequatur maxime. Quibusdam sit maxime aut impedit iusto, voluptate unde voluptates amet repudiandae pariatur vitae nam architecto! Dolores, ut!</h6>
                    <button className="btn btn-info">More Details</button>
                </div>
                <div className="col-md-6 ">
                    <img src={aboutImg} className="img-fluid" alt="about-image" />
                </div>
            </div>
        </div>
    );
};

export default About;