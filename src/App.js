import Osc1 from "./components/Osc/Osc1";
import {useState} from "react";
import './App.css';

let actx = new AudioContext()
let out = actx.destination;
let osc1 = actx.createOscillator()
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);



function App() {
  const [osc1Freq , setOsc1Freq] = useState(osc1.frequency.value)
  const changeOsc1Freq = (e) => {
    let value = e.target.value
    osc1.frequency.value = value
    setOsc1Freq(value)
  }
  return (
    <div className="App">
    <h1>Mixer </h1>
      <button onClick={()=> osc1.start()}>start</button>
      <button onClick={()=> osc1.stop()}>stop</button>
       <Osc1  changeFreq={changeOsc1Freq} freq={osc1Freq}/>
    </div>
  );
}

export default App;
