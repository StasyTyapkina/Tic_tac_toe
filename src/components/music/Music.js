import React, { useState, useEffect}from 'react'
import './music.css'
import mainTheme from "./main.mp3";
import Button from '../button/Button'
import AudioSetup from './AudioSetup'
import useSound from 'use-sound';


const Music = () => {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = React.useState(0.4)
  const audio = mainTheme
  const [play, { stop }] = useSound(audio, {
    volume,
    interrupt: true,
  });
  
  const toggle = () => setPlaying(!playing);

  function handleVolume(e) {
      setVolume(e.target.value)
  }

    useEffect(() => {
      playing ? play() : stop();
    }, [playing] );

  return (
    <div>
      <Button 
        class = 'bttn bttn_middle'
        name = {playing ? "Pause" : "Play"} 
        title = 'Click for start music'
        onClick={toggle} 
      />
      <AudioSetup value={volume} onChange={handleVolume}  />
    </div>
  );
  }


  export default Music