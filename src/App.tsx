import React, { useState } from "react";
import Todo from "./components/Todo";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import { InfoType } from "./types/product";
import LayoutWebsite from "./components/Layouts/LayoutWebsite";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

function App() {
  const [info, setInfo] = useState<InfoType>({
    name: "Công Định",
    age: 20,
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="todo" element={<Todo/>}/>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
