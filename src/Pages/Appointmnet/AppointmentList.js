import { format } from "date-fns";
import React, { useState } from "react";
import AppoinmentCard from "./AppoinmentCard";
import AppoinmentModal from "./AppoinmentModal";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Shared/Loader"

const AppointmentList = ({ selectedDate }) => {
  // const [options, setOption] = useState([]);
  const [modal, setmodal] = useState(null);

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>Available Appointments on {format(selectedDate, "PP")}.</p>;
  }
  // quary
  const date = format(selectedDate,"PP")
  console.log(date);

  const { data: options = [], refetch ,isLoading} = useQuery({
    queryKey: ["appinmentOption",date],
    queryFn: () =>
      fetch(`http://localhost:5000/appinmentOption?date=${date}`).then((res) => res.json()),
  });

  if(isLoading){
    return <Loader/>
  }

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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AppointmentList;
