import { useState } from "react"

function App() {  
  const [color, setColor] = useState("blue")
  
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl">
          <button 
          onClick={() => {setColor("red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>
            Red
          </button>
          <button 
          onClick={() => {setColor("pink")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "pink"}}>
            Pink
          </button>
          <button 
          onClick={() => {setColor("yellow")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}>
            Yellow
          </button>
          <button 
          onClick={() => {setColor("tan")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "tan"}}>
            Tan
          </button>
          <button 
          onClick={() => {setColor("rebeccapurple")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "rebeccapurple"}}>
            Purple
          </button>
          <button 
          onClick={() => {setColor("lime")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lime"}}>
            Green
          </button>
          <button 
          onClick={() => {setColor("aqua")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "aqua"}}>
            Aqua
          </button>
        </div>  
      </div>
    </div>
  )
}

export default App
