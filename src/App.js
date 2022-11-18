import Osc1 from "./components/Osc/Osc1";
import {useEffect, useState} from "react";
import Audio2 from "./components/Audio2/Audio2";
import Audio3 from "./components/Audio2/Audio3";
import Gain from "./components/Gain/Gain";
import './App.css';

let actx = new AudioContext()



function App() {
  // const [osc1Freq , setOsc1Freq] = useState(osc2.frequency.value)
  // const [osc2Freq , setOsc2Freq] = useState(osc2.frequency.value)
  const [gain1state, setGain1] = useState()
  const [gain2state, setGain2] = useState()
  const [out, setOut] =useState()


  useEffect(()=>{

    let osc1 = actx.createOscillator()
    let gain1 = actx.createGain();
    let filter = actx.createBiquadFilter();
    let out = actx.destination;
    setOut(out)
    // osc1.connect(gain1);
    gain1.connect(filter);
    setGain1(gain1)
    filter.connect(out);


    let osc2 = actx.createOscillator()
    let gain2 = actx.createGain();
    setGain2(gain2)
    let filter2 = actx.createBiquadFilter();

    // osc2.connect(gain2);
    gain2.connect(filter2);
    filter2.connect(out);
    setOut(out)
  },[])


  return (
    <div className="App">
    <h1>Mixer </h1>
      <h2>Audio1</h2>
      <Audio3 audioCtx={actx}  gain={gain1state} setGain={setGain1} channelNumber={1}>
      <Gain number={1} gain={gain1state} />
      </Audio3>


      <h2>Audio2</h2>
      <Audio3 audioCtx={actx} gain={gain2state} channelNumber={2}>
        <Gain number={2} gain={gain2state} />
      </Audio3>
    </div>
  );
}

export default App;
