
import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  

  return (
    <section className="relative mb-[50px] bg-[url(https://i.ibb.co/Jv25XB4/bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/25"></div>

      <div className="relative mx-auto flex flex-col-reverse lg:flex-row px-4 py-10 md:py-32 sm:px-6 lg:flex  lg:items-center lg:justify-around lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <DayPicker
          className="shadow-2xl p-3 rounded-lg"
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
        <div>
          <img className="md:w-[594px] mb-[15px] md:mb-0" src={chair} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
