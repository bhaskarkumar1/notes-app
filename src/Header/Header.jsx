import styles from "./Header.module.css"
import { GoLightBulb } from "react-icons/go";

const Header=()=>{
    return (
        <div className={styles.container} >
<GoLightBulb  className={styles.icon}/>
<h1>Notes App</h1>

        </div>
    )
}

export default  Header;