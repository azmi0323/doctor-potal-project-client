import React from "react";

const InfoCard = ({img,cardTitle,cardBody}) => {
  return (
    <div class="card lg:card-side text-white shadow-xl bg-accent">
      <figure className="pl-5">
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;