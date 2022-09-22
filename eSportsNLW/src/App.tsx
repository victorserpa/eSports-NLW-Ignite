import "./styles/main.css";

import logoImg from "./assets/logo.svg";
import { MoviRow } from "./components/MoviRow";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
        <img src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black mt-10 -mb-2">
          Seu{" "}
          <span className="text-transparent bg-nlw-gradient bg-clip-text">
            duo
          </span>{" "}
          está aqui.
        </h1>
      </div>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-12">
        <MoviRow />
      </div>
    </>
  );
}

export default App;
