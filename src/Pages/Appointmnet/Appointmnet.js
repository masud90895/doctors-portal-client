import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentList from "./AppointmentList";

const Appointmnet = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <AppointmentList selectedDate={selectedDate} />
    </div>
  );
};

export default Appointmnet;
