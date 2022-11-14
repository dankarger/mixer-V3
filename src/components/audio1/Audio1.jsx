import {useState,useEffect} from "react";

const Audio1 = ({audioCtx}) => {

    const [buffer, setBuffer]  = useState(null);
    const [ file, setFile ] = useState()

    const load = async () => {
        // const request = new XMLHttpRequest();
        const fileReader = new FileReader()
        fileReader.addEventListener('load',()=>{
            console.log('r',fileReader.result)
            setBuffer(fileReader.result)
        })
        fileReader.readAsDataURL(file)
        // request.open("GET", "../sounds/cash.wav");
        // request.responseType = "arraybuffer";
        // request.onload = function() {
        //     let undecodedAudio = buffer;
        //     audioCtx.decodeAudioData(undecodedAudio, (data) => setBuffer(data))
        // };

        await audioCtx.decodeAudioData(buffer, (data) => setBuffer(data))
    }

    const play = () => {
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start();
    };
    useEffect(()=>{
        // load()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const imageReader = new FileReader()
        imageReader.addEventListener('load', () => {
            setBuffer(imageReader.result)
        })
        imageReader.readAsDataURL(file)

    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
        // console.log('j',image)
        // setImagePreview(image)
        //
        // const urlCreator = window.URL || window.webkitURL;
        // const imageUrl = urlCreator.createObjectURL(image);
        // setImagePreview(imageUrl)

    }
    return (
        <div>
            <button onClick={()=>load()}>load audio1</button>

            <button onClick={()=>play()}>play audio1</button>
            <div  >
                <h1>Uplaod Event Image  </h1>
                <form onSubmit={handleSubmit}>
                    <div  >
                        <input type="file" onChange={handleFileChange}/>
                    </div>
                    <input type="submit" value={'Upload'} className='btn'/>
                </form>
                IMAGE UPLOAD COMPONENT
            </div>
        </div>
    )


}
export default Audio1