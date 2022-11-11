import React, { useState } from "react";
import ShowInfo from "./components/ShowInfo/ShowInfo";
import Todo from "./components/Todo";
import { InfoType } from "./types/product";

function App() {
  const [info, setInfo] = useState<InfoType>({
    name: "Công Định",
    age: 20,
  });
  return (
    <div className="App">
      <ShowInfo info={info} />
      <Todo />
    </div>
  );
}

export default App;
