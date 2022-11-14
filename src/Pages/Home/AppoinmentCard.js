import React from "react";
import doctor from "../../assets/images/doctor.png";

const AppoinmentCard = () => {
  return (
    <section className="relative rounded-lg p-5 lg:p-0 mb-[50px] bg-[url(https://i.ibb.co/J79yQx0/appointment.png)]  bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/25"></div>

      <div className="relative mx-auto flex flex-col-reverse lg:flex-row px-4 sm:px-6 lg:flex  lg:items-center lg:justify-around lg:px-8">
        <div>
          <img className="hidden lg:block -mt-[140px] mb-[15px] w-[650px]  md:mb-0" src={doctor} alt="" />
        </div>
        <div className="max-w-xl text-left">
          <h3 className="text-[#19D3AE] text-xl font-bold mb-2 font-serif">
            Appointment
          </h3>
          <h1 className="text-[36px] font-extrabold sm:text-5xl font-serif">
            Make an appointment Today
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <button className="block w-full rounded  px-12 py-3 text-sm font-medium text-white shadow-md bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] sm:w-auto">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppoinmentCard;
