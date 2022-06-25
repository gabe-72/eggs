import { useState } from "react";
import ItemModal from "./ItemModal";
import "../stylesheets/Item.css";

export default function Item(props) {
  const [ visible, setVisible ] = useState(false); // state of the visibility of the modal
  const img = require("../assets/images/" + props.filename);

  // opens the modal
  const openModal = () => {
    document.body.classList.add("modal-open"); // prevent body scroll
    setVisible(true);
  }

  // closes the modal
  const closeModal = (e) => {
    e.stopPropagation(); // prevent calling openModal right after

    // if clicking the content and not the background, don't close
    if (e.target !== e.currentTarget)
      return;

    document.body.classList.remove("modal-open");
    setVisible(false);
  }

  return (
    <div className="item" onClick={openModal}>
      <div className="item-overlay">{props.name}</div>
      <img
        className="item-img"
        src={img}
        alt={props.name}
      />
      <ItemModal
        visible={visible}
        closeModal={closeModal}
        name={props.name}
        img={img}
      />
    </div>
  );
};