import React from "react";

const ServicesCard = ({card}) => {
    const {name,title,icon} = card;
  return (
    <div className="card border-2 border-white  hover:border-2 hover:border-[#0FCFEC] w-full lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={icon}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
