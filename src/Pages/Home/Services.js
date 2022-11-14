import React from "react";
import treat1 from "../../assets/images/fluoride.png";
import treat2 from "../../assets/images/cavity.png";
import treat3 from "../../assets/images/whitening.png";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const ServiceInfo = [
    {
      id: 1,
      icon: treat1,
      name: "Fluoride Treatment",
      title:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. ",
    },
    {
      id: 2,
      icon: treat2,
      name: "Cavity Filling",
      title:
        "Amalgam Fillings: Amalgam has been used by dental professionals for more than a century.",
    },
    {
      id: 3,
      icon: treat3,
      name: "Teeth Whitening",
      title:
        "Best Teeth Whitening At LASER DENTAL In Uttara. We Utilise World's Most Advanced Teeth Whitening System. ",
    },
  ];
  return (
    <div className="lg:px-[100px] mb-[154px]">
      <div className="font-serif">
        <h1 className="text-[#19D3AE] font-bold text-xl mb-2">OUR SERVICES</h1>
        <p className="text-[36px]">Services We Provide</p>
      </div>
      <div className="mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ServiceInfo.map((card) => (
          <ServicesCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
