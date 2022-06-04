import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

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
            <PrimaryButton></PrimaryButton>
          </div>
          <img
            src={treatment}
            alt=""
            className="w-96 rounded-lg shadow-2xl"
          ></img>
          
        </div>
      </div>
    </div>
  );
};

export default Treatment;
