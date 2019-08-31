import React, { useRef, useState } from 'react';
import Controls from './Controls';

const sizeProps = {width:'640px', height:'360px'};
const posterImg = "https://imagenes.montevideo.com.uy/imgnoticias/201307/_W880_H495/410992.JPG";
const webmSrc = "https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm";
const webmType = 'video/webm;codecs="vp8, vorbis"';

const VideoExample = () => {

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState("1");
  const [currentTime, setCurrentTime] = useState(0);
  const [totalPlayTime, setTotalPlayTime] = useState(0)

  // Set video duration.
  var i = setInterval(function() {
    const videoHandle = videoRef.current;
  	if(videoHandle !== null && videoHandle.readyState > 0) {
      const { duration } = videoHandle;
      setTotalPlayTime(duration);
  		clearInterval(i);
  	}
  }, 200);

  const playVideo = () => {
    const videoHandle = videoRef.current;

    if(!isPlaying) {
      videoHandle.play();
      setIsPlaying(true);
    }
    else {
      videoHandle.pause();
      setIsPlaying(false);
    }
  }

  const muteVideo = () => {
    const videoHandle = videoRef.current;
    if(isMuted){
      videoHandle.muted = false;
      setIsMuted(false);
    }
    else {
      videoHandle.muted = true;
      setIsMuted(true);
    }
  }

  const changeToFullScreen = () => {
    const videoHandle = videoRef.current;

    if (videoHandle.requestFullscreen) {
      videoHandle.requestFullscreen();
    } else {
      if (videoHandle.mozRequestFullScreen)
        videoHandle.mozRequestFullScreen();

      if (videoHandle.webkitRequestFullscreen) {
        videoHandle.webkitRequestFullscreen(); // Chrome and Safari
      }
    }
  }

  const changeVolume = (val) => {
    const videoHandle = videoRef.current;
    setVolume(val);
    videoHandle.volume = val;
  }

  const seekBarChange = (val) => {
    const videoHandle = videoRef.current;

    // Update the video time
    videoHandle.currentTime = val;
    setCurrentTime(val);
  }

  const onTimeUpdate = () => {
    const videoHandle = videoRef.current;
    const { currentTime } = videoHandle;
    setCurrentTime(currentTime);
  }

  return (
  <div>
    <video
      autoPlay={false}
      styles={sizeProps}
      poster={posterImg}
      ref={videoRef}
      onTimeUpdate={onTimeUpdate}
    >
      <source src={webmSrc} type={webmType} />
      <p>
       Your browser doesn't support HTML5 video.
     </p>
    </video>
    <span className="html-controls">
      <Controls
        isPlaying={isPlaying}
        playVideo={playVideo}
        currentTime={currentTime}
        seekBarChange={seekBarChange}
        isMuted={isMuted}
        muteVideo={muteVideo}
        volume={volume}
        changeVolume={changeVolume}
        changeToFullScreen={changeToFullScreen}
        duration={totalPlayTime}
      />
    </span>

  </div>
  );


}

export default VideoExample;
