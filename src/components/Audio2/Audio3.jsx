import {useState,useEffect} from "react";
import './Audio.css'

let a;
let bufferLoader

const Audio3 = ({audioCtx, channelNumber, gain, setGain}) => {

    const [buffer, setBuffer]  = useState(null);
    const [ isPuase, setIsPause] = useState(false)
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


        }
    }, [audio, audioCtx, setGain, gain]);

    const handleClick = () => {
        if (buttonName === "Play") {
            if(audioCtx.state==='suspended'){
                audioCtx.resume()
            }
            // a.play();
            if(!isPuase){
                sourceState.start()
                setButtonName("Pause");

            }else {

            }

        } else {
            // sourceState.stop()

            sourceState.playbackRate.value = 0
            setIsPause(true)
            setButtonName("Play");
        }
    };

    const addFile = async (e) => {

        if (e.target.files[0]) {
           setFile((prev)=>e.target.files[0])
        }
        //----------
        const reader1 = new FileReader();
        reader1.onload = function(ev) {

            // Decode audio
            audioCtx.decodeAudioData(ev.target.result).then(function(buffer) {

                const soundSource = audioCtx.createBufferSource();
                soundSource.buffer = buffer;
                setBuffer(buffer)
                soundSource.connect(gain)
                setSourceState(soundSource)

                // Create Compressor Node

            });
        };
        reader1.readAsArrayBuffer(e.target.files[0]);
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
export default Audio3