import React, { useRef } from 'react'
import './VideoPlay.css'
import clg_video from '../../assets/video_college.mp4'
const VideoPlay = ({playState, setPlayState}) => {
    const player = useRef(null);
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false);
        }

    }
  return (
    <div className={`videoplay ${playState?'':'hide'}`} ref={player}
    onClick={closePlayer}>
         <video src={clg_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlay

