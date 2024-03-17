import styles from "./Input.module.css"

const Input=()=>{
    return(
        <div className={styles.container}>

            <div className={styles.textbox}>
                <input type="text" placeholder="Title" />
                <br />
                
                <textarea name="" id="" cols="30" rows="10" placeholder="Take a Note..."></textarea>
                <button className={styles.btn}>+</button>
                
            </div>
            <div className={styles.colorpallete}>
                    {/* <h1>Hello</h1> */}
                </div>
        </div>

    )
}

export default Input