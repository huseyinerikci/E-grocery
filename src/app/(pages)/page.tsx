import React from "react";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <div className="p-5 md:p-7 lg:px-10">
      <Hero />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
