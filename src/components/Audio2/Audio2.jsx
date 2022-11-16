import {useState,useEffect} from "react";
import './Audio.css'

let a;
const Audio2 = ({audioCtx, channelNumber, gain}) => {

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
            const source = audioCtx.createMediaElementSource(a)
            setSourceState(source)
            source.connect(gain)
        }
    }, [audio, audioCtx]);

    const handleClick = () => {
        if (buttonName === "Play") {
            if(audioCtx.state==='suspended'){
                audioCtx.resume()
            }
            a.play();
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
        if (e.target.files[0]) {
            setAudio(URL.createObjectURL(e.target.files[0]));
        }
    };

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