import React from "react";
import img from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="hero mb-[169px]">
      <div className="hero-content  flex-col md:gap-8 lg:gap-[102px]  md:flex-row">
        <img src={img} className="md:max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="text-start ">
          <h1 className="text-5xl font-bold font-serif">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn border-none bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
