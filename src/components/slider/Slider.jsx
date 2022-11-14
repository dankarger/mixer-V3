import styles from './Slider.module.scss'

const Slider=({number,children})=>{

    return (
        <div className={styles.slide}>
            <h4>Slide {number}</h4>
            {children}
        </div>
    )

}
export default Slider