import Gridbox from "./components/Gridbox";
import Header from "./components/Header";
import Intro from "./components/Intro";
import "./stylesheets/App.css";
import "./assets/fonts/Znikomit.otf";

export default function App() {
  const filenames = ["chicken-eggs.jpg", "duck-eggs.jpg", "emu-eggs.jpg", "goose-eggs.jpg", "quail-eggs.jpg"];

  return (
    <div className="wrapper">
      <Header />
      <Intro />
      <div className="container">
        <Gridbox filenames={filenames} col="3" />
      </div>
    </div>
  );
};