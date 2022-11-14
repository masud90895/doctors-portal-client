import React from "react";

const ConnectForm = () => {
  return (
    <section className="relative mb-[50px] bg-[url(https://i.ibb.co/J79yQx0/appointment.png)] rounded-xl mt-[100px] lg:mt-[150px] bg-no-repeat">
      <div className="absolute inset-0 bg-white/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/25"></div>

      <div className="relative mx-auto flex flex-col-reverse lg:flex-row px-4 py-10  sm:px-6 lg:flex  lg:items-center lg:justify-around lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <div className="text-center">
            <p className="text-xl font-bold font-serif text-[#19D3AE]">Contact Us</p>
            <h3 className="text-2xl font-serif">Stay connected with us</h3>
            <input
              placeholder="Email Address"
              className="input w-full max-w-xl my-3"
              type="text"
            />
            <input
              placeholder="Subject"
              className="input w-full max-w-xl mb-3"
              type="text"
            />
            <textarea
              placeholder="Your message"
              className="w-full rounded-lg pt-3 pl-3"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="mt-8 flex  flex-wrap gap-4 text-center">
            <button className="block w-full mx-auto rounded  px-12 py-3 text-sm  font-medium text-white shadow-md bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] sm:w-auto">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectForm;
