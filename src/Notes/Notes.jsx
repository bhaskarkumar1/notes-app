import style from "./Notes.module.css"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Notes=({notesKey,title,text,color,handleDelete,handleEdit})=>{
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
            <FaEdit onClick={()=> handleEdit(title,text,color)} className={style.edit} />

            <RiDeleteBinLine onClick={()=>handleDelete(title,text)}   className={style.icon} />
            
        </div>
        </>
    )
}

export default Notes