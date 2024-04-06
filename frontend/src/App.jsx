import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cart from "./pages/cart";
import Front from "./components/Main/front";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-500 h-screen">
      <Front />
    </div>
  );
}

export default App;
