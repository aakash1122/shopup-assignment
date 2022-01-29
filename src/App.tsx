import React from "react";
import Form from "./components/form/Form";
import Gifs from "./components/gif/Gifs";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen py-4">
      <Form />
      <Gifs />
    </div>
  );
}

export default App;
