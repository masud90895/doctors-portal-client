import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardInfo = [
    {
      id: 1,
      icon: clock,
      name: "Opening Hours",
      title:
        "Tuesday, 08:30-18:30 ; Wednesday, 08:30-18:30 ; Thursday, 08:30-18:30 ; Friday, 08:30-18:30 ; Saturday, Closed.",
      bg: "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]",
    },
    {
      id: 2,
      icon: marker,
      name: "Visit our location",
      title: "Brooklyn, NY 10036, United States",
      bg: "bg-[#3A4256]",
    },
    {
      id: 3,
      icon: phone,
      name: "Contact us now",
      title: "+000 123 456789",
      bg: "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]",
    },
  ];

  return (
    <div className="grid grid-cols-1 mb-[131px] md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-[100px] text-white">
      {cardInfo.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default InfoCards;
