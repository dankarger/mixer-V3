import Osc1 from "./components/Osc/Osc1";
import {useEffect, useState} from "react";
import Audio2 from "./components/Audio2/Audio2";
import Audio3 from "./components/Audio2/Audio3";
import Gain from "./components/Gain/Gain";
import Pan from "./components/Pan/Pan";
import Eq from "./components/Eq/Eq";

import './App.css';

let actx = new AudioContext()



function App() {
  // const [osc1Freq , setOsc1Freq] = useState(osc2.frequency.value)
  // const [osc2Freq , setOsc2Freq] = useState(osc2.frequency.value)
  const [gain1state, setGain1] = useState()
  const [gain2state, setGain2] = useState()
  const [pan1State, setPan1State ] = useState()
  const [pan2State, setPan2State ] = useState()

  const [out, setOut] =useState()


  useEffect(()=>{

    const osc1 = actx.createOscillator()
    const gain1 = actx.createGain();
    const filter = actx.createBiquadFilter();
    const pan1 = actx.createStereoPanner()
    const out = actx.destination;
    setOut(out)
    // osc1.connect(gain1);
    gain1.connect(filter);
    setGain1(gain1)
    filter.connect(pan1);
    pan1.connect(out)
    setPan1State(pan1)


    const osc2 = actx.createOscillator()
    const gain2 = actx.createGain();
    setGain2(gain2)
    const filter2 = actx.createBiquadFilter();
    const pan2 = actx.createStereoPanner()
    // osc2.connect(gain2);
    gain2.connect(filter2);
    filter2.connect(pan2);
    pan2.connect(out)
    setPan2State(pan2)
    setOut(out)
  },[])


  return (
    <div className="App">
    <h1>Mixer </h1>
      <h2>Audio1</h2>
      <Audio3 audioCtx={actx}  gain={gain1state} setGain={setGain1} channelNumber={1} >
      <Gain number={1} gain={gain1state} />
        {/*<Eq gain={gain1state} context={actx} />*/}
        <Pan pan={pan1State} />
      </Audio3>


      <h2>Audio2</h2>
      <Audio3 audioCtx={actx} gain={gain2state} channelNumber={2} setGain={setGain2}>
        <Gain number={2} gain={gain2state} />
        {/*<Eq gain={gain2state} context={actx}/>*/}
        <Pan pan={pan2State} />
      </Audio3>
    </div>
  );
}

export default App;
