import style from "./Notes.module.css"
import { RiDeleteBinLine } from "react-icons/ri";

const Notes=({key,title,text,color})=>{
    return(
        <>
        <div key={key} className={style.container} style={{backgroundColor:color}}>
            <div className={style.title}>
                <h2>{title}</h2>
            </div>
            <div className={style.text}>
                <p>{text}</p>
            </div>

            <RiDeleteBinLine className={style.icon} />

        </div>
        </>
    )
}

export default Notes