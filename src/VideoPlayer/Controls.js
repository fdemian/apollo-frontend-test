import React from 'react';
import { Button, Slider } from 'antd';
import './VideoPlayer.css';
import { getFormattedTime } from './utils';

import {
  faVolumeMute,
  faVolumeOff,
  faExpandArrowsAlt,
  faPlay,
  faPause,
  faVolumeDown,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VideoPlayer.css';

const Controls = (props) => {

  const {
    playVideo,
    isPlaying,
    currentTime,
    seekBarChange,
    muteVideo,
    isMuted,
    changeVolume,
    volume,
    changeToFullScreen,
    duration
  } = props;

  const playIcon = isPlaying ? faPause: faPlay;
  const soundIcon = isMuted ? faVolumeOff : faVolumeMute;
  const volumeVal = isMuted ? 0 : volume;

  const lastMarkStyle = {
    style: {
      color: '#f50',
    },
    label: <strong>{getFormattedTime(duration)}</strong>,
  }

  const firstMarkStyle = {
    style: {
      color: '#f50',
    },
    label: <strong>0:00</strong>,
  };

  const marks = {};

  marks[duration] = lastMarkStyle;
  marks[0] = firstMarkStyle;

  return(
  <div className="video-controls">

    <div className="video-time-slider">
      <Slider
        step={0.01}
        min={0}
        max={duration}
        onChange={seekBarChange}
        marks={marks}
        tipFormatter={getFormattedTime}
        value={currentTime}
      />
    </div>

    <div className="play-controls">

      <Button
        type="dashed"
        shape="circle"
        icon={playIcon}
        size='large'
        onClick={playVideo}
        className="control-icon"
      >
         <FontAwesomeIcon icon={playIcon} />
      </Button>    
      <Button
         type="dashed"
         shape="circle"
         size='large'
         onClick={muteVideo}
         className="control-icon"
      >
       <FontAwesomeIcon icon={soundIcon} />
      </Button>
      <FontAwesomeIcon icon={faVolumeDown} />
      <span style={{display:'inline-table', verticalAlign: 'middle', marginLeft:'5px', marginRight: '5px'}}>
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={volumeVal}
          onChange={changeVolume}
          style={{width: 300 }}
          tipFormatter={(val) => (volume*100) + " %"}
        />
      </span>
      <FontAwesomeIcon icon={faVolumeUp} style={{marginRight:'5px'}} />
      <Button
        type="dashed"
        shape="square"
        size='large'
        onClick={changeToFullScreen}
        className="control-icon"
      >
       <FontAwesomeIcon icon={faExpandArrowsAlt} />
      </Button>
    </div>

  </div>
  )
}

export default Controls;
