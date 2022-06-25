import Item from "./Item";
import "../stylesheets/Gridbox.css";

function getName(item) {
  // remove the extension (.jpg)
  item = item.split(".")[0];
    
  // convert to title case and replace "-" with spaces
  return item.split("-").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
}

export default function Gridbox(props) {
  let rows= [];
  let images = [];
  let itemPopups = [];
  props.filenames.forEach((img, i) => {
    if (i !== 0 && i % props.col === 0) {
      rows.push(<div className="grid-row" key={i / props.col}>
        {images}
      </div>);
      images = [];
    }

    // name of the item in title case
    let name = getName(img);

    // add the Item component
    images.push(<Item
      filename={img}
      name={name}
      key={i}
    />)
  });

  // add the leftover elements
  if (images.length !== 0) {
    rows.push(<div className="grid-row" key={props.filenames.length / props.col}>
      {images}
    </div>);
  }

  return (
    <div>
      <div className="grid">
        {rows}
      </div>
      {itemPopups}
    </div>
  );
};