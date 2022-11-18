import styles from './Eq.module.scss'
import {useEffect, useState} from "react";

const Eq=({context, number, gain ,source})=>{
    const [highPassState, setHighPassState] = useState()
    const [highPassHz, setHighPassHz] = useState( 1500)
    const [highPassGain, setHighPassGain] = useState(0)
    const [biQuadFreq, setBiQuadFreq] = useState(400)
    const [biQuadGain, setBiQuadGain] = useState(25)

    // const [highPassGain, setHighPassGain] = useState()

    useEffect(()=>{
        const highPass = context.createBiquadFilter();
        // const highPassGain = context.createGain()
        // const gainNode = context.createGain();
        // const biquadFilter = context.createBiquadFilter();
        //
        // source.connect(biquadFilter);
        // biquadFilter.connect(gainNode);
        // gainNode.connect(gain);
        //
        // biquadFilter.type = "bandpass";
        // biquadFilter.frequency.value = biQuadFreq;
        // biquadFilter.gain.value = biQuadGain;

        // const lowBand = context.createBiquadFilter();
        // const midBand = context.createBiquadFilter();
        // const highBand = context.createBiquadFilter();
        // const lowPass = context.createBiquadFilter();



        source.connect(highPass)
        highPass.connect(gain)
        // highPassGain.connect(gain)

        highPass.type = "notch"
        highPass.frequency.value = 1550
        highPass.gain.value = 0
        setHighPassState(highPass)

        //
        // highPass.connect(lowBand);
        //
        // lowBand.type = "peaking"
        // lowBand.connect(midBand);
        //
        // midBand.type = "peaking"
        // midBand.connect(highBand);
        //
        // highBand.type  = "peaking"
        // highBand.connect(lowPass)
        //
        // lowPass.type = "lowpass"
        // lowPass.connect(gain);
    },[context,gain, source])

    const changeParams = (e)=> {
        setHighPassHz(e.target.value)
        highPassState.frequency.value = e.target.value
    }
    const changeGain = (e) => {
        setHighPassGain(e.target.value)
        highPassState.gain.value = e.target.value
    }

    return (
        <div className={styles.eq}>

            <div className="section">
                <div className="title">HMF</div>
                <div className="sliders">
                    <div className="range-slider">
                        highpass
                        <span className="scope">5.9</span>
                        <input type="range" className="vertical" min="20" max="20000" step="100" value={highPassHz}
                               data-filter="highPass-freq" data-param="frequency" onChange={changeParams} />
                            <span className="scope scope-min">0.8</span>
                            <span className="param">kHz</span>
                        {highPassHz}
                    </div>
                    <div className="range-slider">
                        gain
                        <span className="scope">5.9</span>
                        <input type="range" className="vertical" min="-10" max="25" step="1" value={highPassGain}
                               data-filter="highPass-gain" data-param="gain" onChange={changeGain} />
                        <span className="scope scope-min">0.8</span>
                        <span className="param">DB</span>
                        {highPassGain}
                    </div>
                    {/*<div className="range-slider">*/}
                    {/*    <span className="scope">12</span>*/}
                    {/*    <input type="range" className="vertical" min="0.7" max="12" step="0.1" value="0.7"*/}
                    {/*           data-filter="highPass" data-param="Q" />*/}
                    {/*        <span className="scope scope-min">0.7</span>*/}
                    {/*        <span className="param">Q</span>*/}
                    {/*</div>*/}
                </div>
            </div>


        </div>
    )

}
export default Eq