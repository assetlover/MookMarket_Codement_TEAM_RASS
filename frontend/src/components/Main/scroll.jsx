import React from "react";
import Card from "./cards";

function ProductCategory({ currentProductType, products }) {
  // Filter products based on the current product type
  let filteredProducts = products;
  console.log(currentProductType);
  if (currentProductType !== "all") {
    filteredProducts = products.filter(
      (product) => product.category === currentProductType
    );
  }

  // Function to create card component for each filtered product
  const createCard = (product) => (
    <Card
      key={product._id}
      imgURL={""} // Assuming you have imgURL in your product data
      name={product.itemName}
      price={product.price}
      sellerName={product.sellername}
      location={product.city + "," + product.district} // Assuming price is present in your product data
    />
  );

  return (
    <div>
      <dl className="dictionary flex flex-row flex-wrap justify-even m-10 max-w-90">
        {filteredProducts.map(createCard)}
      </dl>
    </div>
  );
}

export default ProductCategory;
