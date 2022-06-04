import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content gap-24 my-12 px-12 flex-col lg:flex-row-reverse">
          
        <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsus's that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <Link
              to="/appointment"
              className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary"
            >
              Get Started
            </Link>
          </div>
          <img
            src={treatment}
            alt=""
            className="max-w-lg max-h-lg rounded-lg shadow-2xl"
          ></img>
          
        </div>
      </div>
    </div>
  );
};

export default Treatment;
