import {useState,useEffect} from "react";
import './Audio.css'

let a;
let bufferLoader
const Audio2 = ({audioCtx, channelNumber, gain, setGain}) => {

    const [buffer, setBuffer]  = useState(null);
    const [ file, setFile ] = useState()
    const [audio, setAudio] = useState();
    const [sourceState, setSourceState] = useState()


    const [buttonName, setButtonName] = useState("Play");
    console.log('gain',gain)
    useEffect(() => {
        if (a) {
            a.pause();
            a = null;
            setButtonName("Play");
        }
        if (audio) {

            a = new Audio(audio);

            a.onended = () => {
                setButtonName("Play");
            };
            // const source = audioCtx.createMediaElementSource(a)
            // setSourceState(source)
            // source.connect(gain)
            let source2 = audioCtx.createBufferSource(); // creates a sound source
            source2.buffer = audio;                    // tell the source which sound to play
            source2.connect(gain);       // connect the source to the context's destination (the speakers)
            source2.noteOn(0);

            // play the source now
            setSourceState(source2)

        }
    }, [audio, audioCtx, setGain, gain]);

    const handleClick = () => {
        if (buttonName === "Play") {
            if(audioCtx.state==='suspended'){
                audioCtx.resume()
            }
            // a.play();
            sourceState.start(0 )
            setButtonName("Pause");
        } else {
            a.pause();
            setButtonName("Play");
        }
    };

    //
    // const load=()=>{
    //     const audioContex = new AudioContext()
    //     const audio = new Audio(sound)
    //     const source = audioContex.createMediaElementSource(audio)
    //     source.connect(audioContex.destination)
    //     audio.play()
    // }
    const addFile = (e) => {
        const myArrayBuffer = audioCtx.createBuffer(
            2,
            audioCtx.sampleRate * 3,
            audioCtx.sampleRate
        );
        for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
            // This gives us the actual array that contains the data
            const nowBuffering = myArrayBuffer.getChannelData(channel);
            for (let i = 0; i < myArrayBuffer.length; i++) {
                // Math.random() is in [0; 1.0]
                // audio needs to be in [-1.0; 1.0]
                nowBuffering[i] = Math.random() * 2 - 1;
            }
        }

// Get an AudioBufferSourceNode.
// This is the AudioNode to use when we want to play an AudioBuffer
//         const source = audioCtx.createBufferSource();

// set the buffer in the AudioBufferSourceNode
//         source.buffer = myArrayBuffer;

// connect the AudioBufferSourceNode to the
// destination so we can hear the sound
//         source.connect(audioCtx.gain);

// start the source playing

        if (e.target.files[0]) {
            // setAudio(URL.createObjectURL(e.target.files[0]));
            // eslint-disable-next-line no-undef
            // bufferLoader = new AudioBuffer(
            //     e.target.files[0],
            // );
            //
            // bufferLoader.load();
        }


    };
function finishedLoading(bufferList) {
    // Create two sources and play them both together.
    var source1 = audioCtx.createBufferSource();
    var source2 = audioCtx.createBufferSource();
    source1.buffer = bufferList[0];
    source2.buffer = bufferList[1];

    source1.connect(audioCtx.destination);
    source2.connect(audioCtx.destination);
    source1.noteOn(0);
    source2.noteOn(0);
}
    return (
        <div>

            <div className="channel">
                <h2>{channelNumber}</h2>
                <button onClick={handleClick}>{buttonName}</button>
                <input type="file" onChange={addFile} />
            </div>
        </div>
    )


}
export default Audio2