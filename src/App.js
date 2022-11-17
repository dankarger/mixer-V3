import Osc1 from "./components/Osc/Osc1";
import {useEffect, useState} from "react";
import Audio1 from "./components/audio1/Audio1";
import Audio2 from "./components/Audio2/Audio2";
import Audio3 from "./components/Audio2/Audio3";
import './App.css';

let actx = new AudioContext()


//
// const sound1 = './sounds/cash.wav'
// const audio = new Audio('./sounds/cash.wav');
// const source = actx.createMediaElementSource(audio);
// source.connect(actx.destination)



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


  // const changeOsc1Freq = (e) => {
  //   let value = e.target.value
  //   osc1.frequency.value = value
  //   setOsc1Freq(value)
  // }
  // const changeOsc2Freq = (e) => {
  //   let value = e.target.value
  //   osc2.frequency.value = value
  //   setOsc2Freq(value)
  // }
  // const audio1=()=>{
    // const sound1 = './sounds/cash.wav'
    // const audio = new Audio('./sounds/cash.wav');
    // const source = actx.createMediaElementSource(audio);
    // source.connect(actx.destination)
    // audio.play()
    // const source = actx.createBufferSource();
    // source.buffer = sound1;
    // source.connect(actx.destination);
    // source.start();
  // }
  return (
    <div className="App">
    <h1>Mixer </h1>
      {/*<button onClick={()=>audio.play()}>play audio1</button>*/}
      {/*<button onClick={()=> {*/}
      {/*  osc1.start()*/}
      {/*  osc2.start()*/}

      {/*}}>start</button>*/}
      {/*<button onClick={()=> {*/}
      {/*  osc1.stop()*/}
      {/*  osc2.stop()*/}

      {/*}}>stop</button>*/}
      {/* <Osc1  changeFreq={changeOsc1Freq} freq={osc1Freq}/>*/}
      {/*<Osc1  changeFreq={changeOsc2Freq} freq={osc2Freq}/>*/}
      {/*<Audio1 audioCtx={actx} />*/}
      <Audio3 audioCtx={actx}  gain={gain1state} setGain={setGain1} channelNumber={1}/>
      <Audio3 audioCtx={actx} gain={gain2state} channelNumber={2}/>
    </div>
  );
}

export default App;
