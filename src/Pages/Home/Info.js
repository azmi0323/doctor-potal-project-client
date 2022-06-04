import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-12">
      <InfoCard
        cardTitle="Opening Hours"
        cardBody="We are open five days on an week. Please visit us."
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our Locations"
        cardBody="Brooklyn, NY 10036, United States"
        bgclassName="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        cardBody="+880 1303 823282"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
