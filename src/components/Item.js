import "../stylesheets/Item.css";

export default function Item(props) {
  return (
    <div className="item">
      <a className="item-link" href={"/" + props.filename}>
        <div className="item-overlay">{props.name}</div>
        <img
          className="item-img"
          src={require("../assets/" + props.filename)}
          alt={props.name}
        />
      </a>
    </div>
  );
};