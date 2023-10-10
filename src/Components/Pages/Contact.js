import React from 'react'
function Contact1 ({user}) {
  return (
    <>
        <h1>Hello from Contact1</h1>
    <Contact2 user={user}/>

    </>
  )
}
function Contact2 ({user}) {
  return (
    <>  
      <h2>Hello from contact2</h2>
      <Contact3 user = {user}/>
    </>
  )
}
function Contact3({user}){
  return(
  <>
    Hello welcome {user}
  </>)
}
export default function Contact() {
  const [user,setUser] = ['Hello User']

  return (
    <div>Contact Components<Contact1 user = {user}/> </div>
  )
}
