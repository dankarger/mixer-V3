import {useState} from "react";

import styles from './Pan.module.scss'

const Pan=({number, pan})=>{
    const [ panValue, setPanValue ] = useState(0)

    const changePan = (e) => {
        pan.pan.value = e.target.value
        setPanValue(e.target.value)
    }
    return (
        <div className={styles.pan}>
            <h4>Pan{number}</h4>
            <input
                className="panning-control"
                type="range"
                min="-1"
                max="1"
                step="0.1"
                value={panValue}
                onChange={changePan}
            />
            <span className="panning-value">{panValue}</span>

        </div>
    )

}
export default Pan