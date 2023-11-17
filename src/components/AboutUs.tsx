import { FunctionComponent } from "react";
import "./AboutUs.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className="rectangle-container">
      <div className="group-child2" />
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <div className="at-our-bakery-baking-isnt-ju-parent">
        <div className="at-our-bakery-container">
          <p className="at-our-bakery">{`At our bakery, baking isn't just a process; it's an art, a passion that's woven into every loaf, pastry, and confection we create. Established with a vision to redefine indulgence, we take pride in crafting experiences that transcend the ordinary. Our story began with a small kitchen and a big dream – to infuse the world with the warmth of freshly baked goods. `}</p>
          <p className="at-our-bakery">&nbsp;</p>
          <p className="at-our-bakery">
            What sets us apart is our unwavering commitment to quality. We
            meticulously source the finest ingredients, from velvety chocolate
            to locally grown fruits, ensuring that every bite tells a tale of
            exceptional flavor. But it's not just about ingredients; it's about
            the hands that shape them. Our dedicated team of master bakers pours
            their heart into each recipe, combining time-honored techniques with
            innovative twists.
          </p>
          <p className="at-our-bakery">&nbsp;</p>
          <p className="at-our-bakery">
            From the moment you step into our bakery, you're enveloped in a
            symphony of scents and sights that awaken your senses. Every
            creation that graces our shelves is a result of countless hours of
            experimentation, dedication, and a genuine love for baking. But
            we're more than just bakers; we're a community brought together by a
            shared love for all things delicious.
          </p>
          <p className="at-our-bakery">&nbsp;</p>
          <p className="at-our-bakery">
            As we knead, roll, and bake, we're not just making pastries – we're
            crafting memories. From birthday celebrations marked by our custom
            cakes to lazy Sunday mornings made better with our artisanal bread,
            we're there for life's sweetest moments. Our journey is one of
            passion, flavor, and the joy that comes from spreading happiness,
            one delectable treat at a time.
          </p>
        </div>
        <b className="about-us">About Us</b>
      </div>
    </div>
  );
};

export default AboutUs;
