import React from "react";
import Banner from "./Banner";
import Treatment from "./Treatment";
import InfoCards from "./InfoCards";
import Services from "./Services";
import AppoinmentCard from "./AppoinmentCard";
import Testimonial from "./Testimonial";
import ConnectForm from "./ConnectForm";

const Home = () => {
  return (
    <div className="px-5">
      <Banner />
      <InfoCards />
      <Services />
      <Treatment />
      <AppoinmentCard/>
      <Testimonial/>
      <ConnectForm/>
    </div>
  );
};

export default Home;
