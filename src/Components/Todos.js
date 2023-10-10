import React, { memo } from 'react'


// const Todos = (props)=>{
//     console.log("Child Todos", props.todos.map((todo)=>console.log(todo)))
//     return (
//         {props.todos.map((todo,index)=>{
//             return <p key={index}>{todo}</p>
//         })}
    
//     // <>hello</>
        
//     )
// }
// export default memo(Todos)
export default function Todos(props) {
  return (
    <>
        {props.todos.map((todo,index)=>{
        return <p key={index}>{todo}</p>
    })}
</>
  )
}
