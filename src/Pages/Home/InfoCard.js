import React from "react";

const InfoCard = ({ img, cardTitle, cardBody, bgClass }) => {
  return (
    <div className={`card lg:card-side py-6 text-white shadow-xl ${bgClass}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;
