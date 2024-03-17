import styles from "./Input.module.css"
import React,{useState} from "react"
const Input=({title,text,handleChange,handleColor,handleSubmit})=>{

    
    
    return(
        <div className={styles.container}>

            <div className={styles.textbox}>
                <input type="text" name="title" value={title} onChange={(e)=>handleChange(e)} placeholder="Title" />
                <br />
                
                <textarea  onChange={(e)=>handleChange(e)} name="text" value={text} id="" cols="30" rows="10" placeholder="Take a Note..."></textarea>
                <button onClick={(e)=>handleSubmit(e)} className={styles.btn}>+</button>
                <div className={styles.colorpallete}>
                <button onClick={(e)=>handleColor(e)} value="orange" style={{backgroundColor:"orange"}}></button>
                <button onClick={(e)=>handleColor(e)} value="purple" style={{backgroundColor:"purple"}}></button>
                <button onClick={(e)=>handleColor(e)} value="red" style={{backgroundColor:"red"}}></button>

                <button onClick={(e)=>handleColor(e)} value="brown" style={{backgroundColor:"brown"}}></button>
                <button onClick={(e)=>handleColor(e)} value="green" style={{backgroundColor:"green"}}></button>
                <button onClick={(e)=>handleColor(e)} value="blue" style={{backgroundColor:"blue"}}></button>
                

                </div>
            </div>
   
        </div>

    )
}

export default Input