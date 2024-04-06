import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Front from "./components/Main/front";
import Cart from "./pages/cart";
import Total from "./pages/Total";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-500 h-screen">
      <Cart />
    </div>
  );
}

export default App;
