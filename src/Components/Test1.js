import React from 'react'
import App from '../App'
import { useState } from 'react'

export default function Test1(props) {
    
    const [name,setName] = useState("")
    const [sirname,setSirname] = useState("")

    const [inputs,setInputs] = useState({})
    const [textarea,setTextarea] = useState("")
    const [mycar,setMycar] = useState("Mclaren")
    const handlechange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs(values=>({...values,[name]:value}))

    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log("TExtarea data",textarea)
        console.log("The car selected is: ", mycar)
        // alert(name)
    }
    const textAreaChange=(e)=>{
        setTextarea(e.target.value)
    }
    const handleOptionChange=(e)=>{
        setMycar(e.target.value)
    }
        return (
    <>
    {/* <ul>
        <h1>The Id for the car {props.brand} is given as {props.car_id}</h1>
    </ul> */}
    <form onSubmit={handleFormSubmit}>
        <label>Please enter your name:</label>
        <input type='text' value={inputs.pername} name = "pername" onChange={handlechange}/>
        <br/>
        <label>Please enter sirname:</label>
        <input type='text' value={inputs.sirname} name = "sirname" onChange={handlechange}/>
        <input type='submit'/>
        <textarea value={textarea} onChange={textAreaChange}/>
        <select value={mycar} onChange={handleOptionChange}>
            <option value="Ford">Ford</option>
            <option value="Mustang">Mustang</option>
            <option value="Mclaren">Mclaren</option>
        </select>
    </form>
    
    </>
  )
}
