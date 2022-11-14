import {useEffect} from "react";

const Oscillator = ({changeFreq, freq}) => {

    return (
        <div>
            <input type="range" id="frequency" onChange={changeFreq} max={5000} value={freq}/>
        </div>
    )


}
 export default Oscillator