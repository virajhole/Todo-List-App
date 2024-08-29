import { useState } from "react";

import "./App.css";
import List from "./compontents/List";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('../public/img1.jpeg')] bg-cover bg-no-repeat bg-center  "></div>
      <div className="relative z-10">
        <List />
      </div>
    </div>
  );
}

export default App;
