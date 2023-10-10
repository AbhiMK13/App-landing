import logo from './logo.svg';
import './App.css';
import Test1 from './Components/Test1';
import Home from './Components/Pages/Home';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Pages/Layout';
import NoPage from './Components/Pages/NoPage';
import Todos from './Components/Todos';
import { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard';




function App(props) {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  const [color,setColor] = useState("Blue")
  const increment=()=>{
    setCount((c)=>c+1)
  }
  const [car, setCar] = useState({'name':"mustang","color":"Blue","Year":1993})
  const handlecarchange=()=>{
    setCar(p=>{return { ...p, Year:2001}})
    // setCar({color:'black'})
    // setCar(previousState=>{
    //   return{...previousState,color:"Black"}
    // })
  }
  const [timecount, setCountTime] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCountTime((timecount)=>timecount+1);
    },1000);
  },[])
return (
    <>
      {/* <h1>Hello there I've rendered {timecount} times</h1>
      <Todos todos = {todos}/>
      <h1>My favourite color is {color}</h1>
      <button type="button" onClick={()=>setColor("Green")}>Green</button>
      <button type="button" onClick={()=>setColor("Pink")}>Pink</button>
      <div>
        Count : {count}
        <button onClick={increment}>+Increment</button>
      </div>
      <h3>Hello I have a {car.name} with the color {car.color} and the model is {car.Year}</h3>
      <button onClick={handlecarchange}>click me to change the color change in car</button>
      <Test1/>
      <Contact/> */}
      {/* <Home/> */}
      <Dashboard/>
    </>
  );
}

export default App;
