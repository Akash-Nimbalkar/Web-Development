import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
//let counter = 5;

const addValue = ()=>{
  // console.log("Clicked" , counter)
  // counter = counter + 1;
  // if(counter+1 <=20){
  //   setCounter(counter+1);
  // }
  setCounter(prevCounter => prevCounter+1);
  setCounter(prevCounter => prevCounter+1);
  setCounter(prevCounter => prevCounter+1);
  setCounter(prevCounter => prevCounter+1);
  
}

const removeValue =()=>{
  if(counter-1 >=0){
    setCounter(counter-1);
  }
  
}
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>

    <p>footer : {counter}</p>
    </>
  )
}

export default App
