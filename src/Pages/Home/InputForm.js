import React from "react";
import appointment from '../../assets/images/appointment.png'
const InputForm = () => {
  return (
    <div className="text-center py-12" style={{
        background:`url(${appointment})`
    }}>
        <h1 className="text-4xl text-white">Stay Connected with us</h1>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full  max-w-lg"
        />
      </div>
      <textarea
        className="textarea mt-6 w-full max-w-lg textarea-bordered"
        placeholder="Your message"
      ></textarea>
      <div className="my-6">
        <button className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputForm;
