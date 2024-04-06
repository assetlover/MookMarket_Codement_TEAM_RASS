import React from "react";
import Header from "./header";
import SearchBar from "./searchbar";
import Scroll from "./scroll";
import SliderComp from "./slider";
import Footer from "./footer";

function Front() {
  return (
    <div>
      <Header />
      <SearchBar />
      <SliderComp />
      <Scroll />
      <Footer />
    </div>
  );
}
export default Front;
