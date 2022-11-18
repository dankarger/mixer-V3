import styles from './InputSlider.module.scss'

const InputSlider=({number})=>{

    return (
        <div className={styles.slide}>
            <h4>input {number}</h4>
            <input type="range"/>
        </div>
    )

}
export default InputSlider