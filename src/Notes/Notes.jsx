import style from "./Notes.module.css"
import { RiDeleteBinLine } from "react-icons/ri";

const Notes=({notesKey,title,text,color,handleDelete})=>{
    // delete


    return(
        <>
        <div key={notesKey} className={style.container} style={{backgroundColor:color}}>
            <div className={style.title}>
                <h2>{title}</h2>
            </div>
            <div className={style.text}>
                <p>{text}</p>
            </div>
            <RiDeleteBinLine onClick={()=>handleDelete(title,text)}   className={style.icon} />
            
        </div>
        </>
    )
}

export default Notes