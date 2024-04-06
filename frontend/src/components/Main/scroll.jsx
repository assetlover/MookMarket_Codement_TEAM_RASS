import React from "react";
import Card from "./cards";
import details from "../../details";

function createCard(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      imgURL={emojiTerm.imgURL}
      name={emojiTerm.name}
      meaning={emojiTerm.price}
    />
  );
}
function Scroll() {
  return (
    <div>
      <dl className="dictionary flex flex-wrap justify-between m-10 max-w-90">{details.map(createCard)}</dl>
    </div>
  );
}

export default Scroll;
