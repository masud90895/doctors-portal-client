import React from "react";
import quote from "../../assets/icons/quote.svg";
import img1 from "../../assets/images/people1.png"
import img2 from "../../assets/images/people2.png"
import img3 from "../../assets/images/people3.png"
import PatientsReview from "./PatientsReview";

const Testimonial = () => {
    const review = [
        {
            id: 1,
            text: "The services that I receive from (DN) is excellent. Dr.X and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.",
            img: img1,
            name: "Winson Herry",
            city : "California",
        },
        {
            id: 2,
            text: "Dr.X is incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment. It’s rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend becoming her patient!",
            img: img2,
            name: "Garrett Silva",
            city : "California",
        },
        {
            id: 3,
            text: "Great medical office, wonderful and warm experience from start to finish. Appreciate Dr.X taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.",
            img: img3,
            name: "Dawn Hardy",
            city : "California",
        },
    ]
  return (
    <section className="mt-[84px]">
      <div className="flex justify-between font-serif">
        <div className="text-left">
          <h1 className="text-xl font-bold text-[#19D3AE]">Testimonial</h1>
          <p className="text-3xl ">What Our Patients Says</p>
        </div>
        <div>
          <img className="w-[100px] lg:w-[192px]" src={quote} alt="" />
        </div>
      </div>

      <div className="mt-[146px] grid grid-col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
        {
           review.map(rv=> <PatientsReview key={rv.id} rv={rv}/>) 
        }
      </div>
    </section>
  );
};

export default Testimonial;
