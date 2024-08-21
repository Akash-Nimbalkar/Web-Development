import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);

  const myObj = {
    name:"akash",
    age:21
  }

  let myArr = [1,4,5];

  return (
    <>
      <h1 className="bg-green-600 text-orange-500 rounded-xl mb-4">Tailwind test</h1>
     
      {/* <Card channel="chai aur code" someObj={myObj} arr={myArr}/>  */}
      <Card username="chaiaurcode" btnText="Click Me"/>

      <Card username="pranutan" btnText="View my Portfolio" />

      <Card username="prajakta" />
      
    </>
  );
}

export default App;
