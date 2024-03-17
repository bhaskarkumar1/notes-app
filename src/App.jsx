import Header from "../src/Header/Header"
import Input from "./Input/Input"
import Notes from "./Notes/Notes"
import  './App.css'
import data from "./Dummy"
function App() {
return(
<>
<div className="container">
<Header/>
<Input/>
<div className="notesbox">
  {
    data.map((note,index)=>(
         <Notes key={index} title={note.title} text={note.text} color={note.color}
         />

    ))
  }
</div>

</div>
</>
  )
}

export default App
