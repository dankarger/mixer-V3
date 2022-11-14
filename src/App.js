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


let osc2 = actx.createOscillator()
let gain2 = actx.createGain();
let filter2 = actx.createBiquadFilter();

osc2.connect(gain2);
gain2.connect(filter2);
filter2.connect(out);

function App() {
  const [osc1Freq , setOsc1Freq] = useState(osc2.frequency.value)
  const [osc2Freq , setOsc2Freq] = useState(osc2.frequency.value)

  const changeOsc1Freq = (e) => {
    let value = e.target.value
    osc1.frequency.value = value
    setOsc1Freq(value)
  }
  const changeOsc2Freq = (e) => {
    let value = e.target.value
    osc2.frequency.value = value
    setOsc2Freq(value)
  }
  return (
    <div className="App">
    <h1>Mixer </h1>
      <button onClick={()=> {
        osc1.start()
        osc2.start()

      }}>start</button>
      <button onClick={()=> {
        osc1.stop()
        osc2.stop()

      }}>stop</button>
       <Osc1  changeFreq={changeOsc1Freq} freq={osc1Freq}/>
      <Osc1  changeFreq={changeOsc2Freq} freq={osc2Freq}/>
    </div>
  );
}

export default App;
