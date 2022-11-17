import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
// import Main from "./all/mainAll";
// import Product from "./all/productAll";
// import Cart from "./all/cartAll";

import Start from "./components/start/start";
import Main from "./components/main/main";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default App;


