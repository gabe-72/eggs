import Gridbox from "./Gridbox";
import "../stylesheets/App.css";
import "../assets/fonts/Znikomit.otf";

export default function App() {
  const filenames = ["chicken-eggs.jpg", "duck-eggs.jpg", "emu-eggs.jpg", "goose-eggs.jpg", "quail-eggs.jpg"];

  return (
    <div>
      <h1>Eggs</h1>
      <Gridbox filenames={filenames} col="3" />
    </div>
  );
};