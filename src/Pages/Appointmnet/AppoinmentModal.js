import { format } from "date-fns";
import React from "react";

const AppoinmentModal = ({ modal, selectedDate, setmodal }) => {
  const { name, slots } = modal;

  const handleModal = (e) => {
    e.preventDefault();
    const form = e.target;

    const date = form.date.value;
    const slot = form.slot.value;
    const treatment = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const allInfo = {
      name,
      appointmentDate: date,
      slot,
      patientName: treatment,
      number,
      email,
    };
    console.log(allInfo);
    setmodal(null);
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <form onSubmit={handleModal} className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold text-left">{name}</h3>
          <div className="mt-7 ">
            <input
              type="text"
              name="date"
              defaultValue={format(selectedDate, "PP")}
              className="input border border-gray-400 w-full   py-4  "
              disabled
            />
            <select name="slot" className="select select-bordered w-full my-3 ">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input border border-gray-400 w-full my-3   py-4  "
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="input border border-gray-400 w-full my-3   py-4  "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input border border-gray-400 w-full my-3   py-4  "
            />
          </div>
          <input type="submit" className="btn w-full mt-5" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default AppoinmentModal;
