import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentCard from "./AppoinmentCard";
import AppoinmentModal from "./AppoinmentModal";

const AppointmentList = ({ selectedDate }) => {
  const [options, setOption] = useState([]);
  const [modal, setmodal] = useState(null);

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>Available Appointments on {format(selectedDate, "PP")}.</p>;
  }

  useEffect(() => {
    fetch("AppoinmentOption.json")
      .then((res) => res.json())
      .then((data) => setOption(data));
  }, []);

  return (
    <div className="mb-[137px]">
      <div>
        <h1 className="text-center text-xl font-serif text-[#19D3AE]">
          {footer}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[100px]">
        {options.map((option) => (
          <AppoinmentCard
            key={option._id}
            option={option}
            setmodal={setmodal}
          />
        ))}
      </div>
      {modal && (
        <AppoinmentModal
          modal={modal}
          setmodal={setmodal}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
};

export default AppointmentList;
