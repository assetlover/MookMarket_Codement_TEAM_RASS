import React from "react";
import Header from "./header";
import SearchBar from "./searchbar";
import Scroll from "./scroll";
import Slider from "./slider";
import Footer from "./footer";

function Front(){
    return (
        <div>
    <Header />
    <SearchBar />
    <Slider/>
    <Scroll />
    <Footer/>
</div>
    );
}
export default Front;