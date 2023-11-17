import { FunctionComponent } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import "./BakerysStore.css";

const BakerysStore: FunctionComponent = () => {
  return (
    <div className="bakerys-store">
      <div className="hero-section">
        <div className="indulge-in-a-container">
          <p className="indulge-in-a">{`Indulge in a symphony of flavors at our artisanal bakery. `}</p>
          <p className="indulge-in-a">{`Welcome to a world where the aroma of freshly baked `}</p>
          <p className="indulge-in-a">{`wonders captivates your senses. Our master bakers `}</p>
          <p className="indulge-in-a">{`craft each creation with passion, using only the finest `}</p>
          <p className="indulge-in-a">{`ingredients to ensure every bite is pure delight. `}</p>
          <p className="indulge-in-a">&nbsp;</p>
          <p className="indulge-in-a">{`From flaky croissants to decadent cakes, experience `}</p>
          <p className="indulge-in-a">{`the epitome of taste and craftsmanship. Whether it's `}</p>
          <p className="indulge-in-a">{`a special occasion or a craving for the extraordinary, `}</p>
          <p className="indulge-in-a">{`our bakery offers a haven for your palate. Elevate `}</p>
          <p className="indulge-in-a">{`your moments with the magic of our oven-fresh delights. `}</p>
          <p className="indulge-in-a">
            Your journey to exceptional taste begins here.
          </p>
        </div>
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      </div>
      <img className="bakerys-store-child" alt="" src="/rectangle-3@2x.png" />
      <img className="bakerys-store-item" alt="" src="/rectangle-4@2x.png" />
      <div className="rectangle-parent">
        <img className="group-child" alt="" src="/rectangle-2@2x.png" />
        <img className="group-item" alt="" src="/rectangle-5@2x.png" />
        <img className="group-inner" alt="" src="/rectangle-6@2x.png" />
        <img className="rectangle-icon" alt="" src="/rectangle-7@2x.png" />
      </div>
      <b className="our-offerings">Our offerings</b>
      <Hero />
      <Hero propTop="974px" propLeft="438px" />
      <Hero propTop="984px" propLeft="747px" />
      <Hero propTop="1374px" propLeft="134px" />
      <Hero propTop="1390px" propLeft="433px" />
      <Hero propTop="1390px" propLeft="721px" />
      <AboutUs />
      <div className="bakerys-store-inner" />
      <div className="rectangle-div" />
      <b className="contact-us">Contact Us</b>
      <div className="bakerys-store-child1" />
      <b className="full-name">Full Name</b>
      <div className="bakerys-store-child2" />
      <b className="phone">Phone</b>
      <div className="bakerys-store-child3" />
      <b className="address">Address</b>
      <div className="bakerys-store-child4" />
      <b className="description">Description</b>
      <div className="bakerys-store-child5" />
      <b className="email">Email</b>
      <b className="submit">Submit</b>
      <div className="bakerys-store-child6" />
      <b className="all-rights-are">All rights are reserved by @BakeryStore</b>
      <Header />
    </div>
  );
};

export default BakerysStore;
