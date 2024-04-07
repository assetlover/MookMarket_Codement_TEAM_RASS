import React, { useEffect, useState } from "react";

function Card(props) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Function to fetch image URL based on query (name)
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${props.name}&count=1&client_id=1etTPLlY-SYztcSRvHwO01Jj9SppfaaL3vMCMBGWkoQ`
        );
        const data = await response.json();
        console.log(response.data);
        // Set the imageURL state to the regular-sized image URL
        setImageURL(data[0].urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    // Call fetchImage function when props.name changes
    fetchImage();
  }, [props.name]);

  return (
    <div className="term text-center max-w-80 mb-12 p-8 rounded-md shadow-md bg-white transition duration-100 ease-in-out m-5">
      <dt className="mb-4 text-teal-500 leading-none mt-4 mb-1 font-200">
        <img
          className="image block mx-auto mb-5 text-4xl"
          role="img"
          src={imageURL}
          alt={props.name} // Add alt attribute for accessibility
        />
        <span className="text-2xl font-bold">{props.name}</span>
      </dt>
      <dd className="text-sm ml-0">
        <p>Price: ${props.price}</p>
        <p>Seller: {props.sellerName}</p>
        <p>Location: {props.location}</p>
      </dd>
    </div>
  );
}

export default Card;
