import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AppoinmentModal = ({ modal, selectedDate, setmodal, refetch }) => {
  const { name, slots } = modal;
  const { user } = useContext(AuthContext);
  const handleModal = (e) => {
    e.preventDefault();
    const form = e.target;

    const date = form.date.value;
    const slot = form.slot.value;
    const treatment = form.name.value;
    const number = form.number.value;
    const email = form.email.value;

    if (!user?.email) {
      return toast.error("please login for booking");
    }

    const allInfo = {
      name,
      appointmentDate: date,
      slot,
      patientName: treatment,
      number,
      email,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("booking confirmed successfully");
          setmodal(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
              disabled
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
              placeholder="Email"
              disabled
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
