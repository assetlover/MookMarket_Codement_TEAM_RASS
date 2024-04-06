import React from "react";
import Header from "./header";
import SearchBar from "./searchbar";
import Scroll from "./scroll";
import SwipeableTextMobileStepper from "./slider";


function Front(){
    return (
        <div>
    <Header />
    <SearchBar />
    <SwipeableTextMobileStepper/>
    <Scroll />
</div>
    );
}
export default Front;