import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-300"
    style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-between  shadow-xl bg-white px-3 py-2 rounded-full w-[80%]">
      
      <button onClick={()=> setColor("red")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:"red", fontWeight:600, color:"white"}}>Red</button>
      <button onClick={()=> setColor("green")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:"green", fontWeight:600, color:"white"}}>Green</button>
      <button onClick={()=> setColor("blue")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:"blue", fontWeight:600, color:"white"}}>Blue</button>
      <button onClick={()=> setColor("#722F37")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:'#722F37', fontWeight:600, color:"white"}}>Wine</button>
      <button onClick={()=> setColor("DeepPink")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:"DeepPink", fontWeight:600, color:"white"}}>Pink</button>
      <button onClick={()=> setColor("maroon")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:"maroon", fontWeight:600, color:"white"}}>Maroon</button>
      <button onClick={()=> setColor("purple")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:"purple", fontWeight:600, color:"white"}}>Purple</button>
      <button onClick={()=> setColor("teal")}  className="outline-none px-4  rounded-full w-20"  style={{backgroundColor:"teal", fontWeight:600, color:"white"}}>Teal</button>

      </div>
    </div>
      
    </div>
  )
}

export default App
