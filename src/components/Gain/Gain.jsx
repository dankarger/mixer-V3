import styles from './Gain.module.scss'

const Gain=({number, gain})=>{


    const changeGain = (e) => {
        gain.gain.value = e.target.value
    }
    return (
        <div className={styles.gain}>
            <h4>Gain Audio{number}</h4>
            <input type="range" onChange={changeGain} max={1} step={0.1}/>

        </div>
    )

}
export default Gain