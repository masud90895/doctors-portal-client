import React from "react";

const InfoCard = ({card}) => {
    const {name,title,icon,bg} = card;
  return (
    <div className={`lg:card lg:card-side text-center rounded-lg shadow-xl p-8 ${bg}`}>
      <figure>
        <img className="w-[20%] lg:w-full mx-auto"  src={icon} alt="" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default InfoCard;
