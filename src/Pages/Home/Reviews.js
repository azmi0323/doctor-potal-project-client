import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        
        <p>{review.review}</p>
        <div className="flex items-center gap-5">
          <div className="avatar mt-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
              <img  src={review.img} alt='img'/>
            </div>
          </div>
          <div className="mt-4">
                <h4 className="text-xl">{review.name}</h4>
                <p>{review.location}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
