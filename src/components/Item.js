import { Link } from "react-router-dom";
import "../stylesheets/Item.css";

export default function Item(props) {
  return (
    <div className="item">
      <Link to={"/egg/" + props.filename.split(".")[0]} className="item-link" >
        <div className="item-overlay">{props.name}</div>
        <img
          className="item-img"
          src={require("../assets/images/" + props.filename)}
          alt={props.name}
        />
      </Link>
    </div>
  );
};