import React from "react";
import { Link } from "react-router-dom";
import chair from '../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-home">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair} alt=''
            className="max-w-lg rounded-lg shadow-2xl">
          </img>
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cuspidate voluptatem et in. Quadrat fugit ut assumed
              excepting exercitation quasi. In delegati eagle aut repudiate
              et a id nisi.
            </p>
            <Link to='/appointment' className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
