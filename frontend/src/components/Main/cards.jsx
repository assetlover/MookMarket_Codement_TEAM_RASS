import React from "react";
import details from "../../details";

function Card(props) {
  return (
    
      <div className="term text-center max-w-80 mb-12 p-8 rounded-md shadow-md bg-white transition duration-100 ease-in-out">
        <dt className="mb-4 text-teal-500 leading-none mt-4 mb-1 font-200">
          <img className="image block mx-auto mb-5 text-4xl" role="img" 
            src={props.imgURL}
          />
          <span className="text-2xl font-bold">{props.name}</span>
        </dt>
        <dd className="text-sm ml-0">{props.meaning}</dd>
      </div>

  );
}
export default Card;
