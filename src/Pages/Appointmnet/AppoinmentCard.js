import React from "react";

const AppoinmentCard = ({ option, setmodal}) => {
  const { name, slots ,price} = option;
  return (
    <div className="card  shadow-xl  border border-[#19D3AE]">
      <div className="card-body">
        <h2 className="text-[#19D3AE] text-2xl font-bold  font-serif">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Again Tomorrow"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p><small>${price}</small></p>
        <div className="card-actions justify-center">
          {/* <button className="btn border-none bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]">
            Book Appointment
          </button> */}
          <label
            onClick={() => setmodal(option)}
            htmlFor="my-modal-3"
            className="btn  border-none bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]"
            disabled={slots.length === 0 ? true : false}
          >
            {" "}
            {slots.length === 0 ? "Not Available" : "Book Appointment"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentCard;
