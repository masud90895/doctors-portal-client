import React from "react";

const PatientsReview = ({rv}) => {
    const {name,img,city,text} =rv;
  return (
    <article className="rounded-xl hover:border hover:border-[#0FCFEC]  border border-gray-300  shadow-xl  p-8">
      <ul className="mt-4 space-y-2 ">
        <li className="text-left mb-4">
        <p>{text}</p>
        </li>
      </ul>
      <div className="flex items-center">
        <img
          alt=""
          src={img}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div className="ml-3">
          <h3 className="text-lg font-medium ">{name}</h3>

          <div className="flow-root">
            <h1 className="text-left" >{city}</h1>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PatientsReview;
