import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <section className="relative mb-[50px] bg-[url(https://i.ibb.co/Jv25XB4/bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/25"></div>

      <div className="relative mx-auto flex flex-col-reverse lg:flex-row px-4 py-10 md:py-32 sm:px-6 lg:flex  lg:items-center lg:justify-around lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl font-serif">
            Your New Smile Starts Here
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Are you ready to invest in a new smile this year? 2020 is the
            perfect time to boost your confidence and create a smile that you
            love!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <button className="block w-full rounded  px-12 py-3 text-sm font-medium text-white shadow-md bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] sm:w-auto">
              GET STARTED
            </button>
          </div>
        </div>
        <div>
          <img className="md:w-[594px] mb-[15px] md:mb-0" src={chair} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
