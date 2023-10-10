import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [formcount, setFormcount] = useState(0)
  const count =useRef(0)
  useEffect(()=>{
    count.current = count.current + 1;
  });
  // const handleformsubmit = ()=>{
    
  //   console.log("Form sent")
  // }
  return (
    <div>Home Components
      <form onSubmit={(e)=>setFormcount(e.target.value)}>
      {/* <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/> */}
      <h1>Element Rendered {count.current} times</h1>
      {formcount}
      
      <button type="submit">Submit</button>

      </form>
    </div>

  )
}
