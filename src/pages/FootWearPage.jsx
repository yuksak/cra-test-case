import React from "react";
import Accessories from "../components/accessories";
import Arrivals from "../components/arrivals";
import Intro from "../components/intro";
import Products from "../components/products";
import Subscribe from "../components/subscribe";
import Trend from "../components/trend";

const FootWearPage = () => {
  return (
    <div>
      <Intro />
      <Products />
      <Accessories />
      <Trend />
      <Arrivals />
      <Subscribe />
    </div>
  );
};

export default FootWearPage;
