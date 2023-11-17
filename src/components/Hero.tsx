import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Hero.css";

type HeroType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Hero: FunctionComponent<HeroType> = ({ propTop, propLeft }) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="barfi-rs-900-parent" style={groupDivStyle}>
      <b className="barfi-rs-900-container">
        <p className="barfi">Barfi</p>
        <p className="barfi">Rs. 900/=</p>
      </b>
      <div className="rectangle-group">
        <div className="group-child1" />
        <b className="order-now">Order Now</b>
      </div>
    </div>
  );
};

export default Hero;
