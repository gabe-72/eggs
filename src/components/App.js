import React from "react";
import Item from "./Item";

function getName(item) {
  // remove the extension (.jpg)
  item = item.split(".")[0];
    
  // convert to title case and replace "-" with spaces
  return item.split("-").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
}

export default class App extends React.Component {
  render() {
    const filenames = ["chicken-egg.jpg"];

    let images = [];
    filenames.forEach((img, i) => {
      images.push(<Item
        filename={img}
        name={getName(img)}
        key={i}
      />)
    });

    return (
      <div>
        <h1>Eggs</h1>
        {images}
      </div>
    );
  }
};