import Header from "../src/Header/Header"
import Input from "./Input/Input"
import Notes from "./Notes/Notes"
import  './App.css'
// import data from "./Dummy"
import React,{useState} from "react"
function App() {
  let [data,setData]=useState([])

  let[notes,setNotes]=useState({
      title:"",
      text:"",
      color:"green"
  })

let handleChange=(e)=>{
  // console.log(e.target.value, e.target.name)
  setNotes((prevObj)=>({
      ...prevObj,[e.target.name]:e.target.value
}))

}

let handleColor=(e)=>{
  setNotes((prevObj)=>({
      ...prevObj,color:e.target.value
  }))
}


let handleSubmit=()=>{
  // console.log(notes)
if(notes.title!=0 && notes.text!=0){
  setData((prevData)=>([
      ...prevData,notes
  ]))
  console.log(data)
  setNotes(()=>({
  title:"",
  text:"",
  color:"green"
  }))
}

  }

  let handleDelete=(title,text)=>{
    // console.log("handle delte clicked")
    // console.log(title,text)

    // console.log(data)
const filterdArray= data.filter((obj)=>{
return obj.title!==title && obj.text!==text
})
setData(filterdArray)
}



return(
<>
<div className="container">
<Header/>
<Input   
title={notes.title}
text={notes.text}
handleSubmit={handleSubmit}
handleColor={handleColor}
handleChange={handleChange}

/>
<div className="notesbox">
  {
    data.map((note,index)=>(
         <Notes notesKey={index} title={note.title} text={note.text} color={note.color}  handleDelete={handleDelete}
         />

    ))
  }
</div>

</div>
</>
  )
}

export default App
