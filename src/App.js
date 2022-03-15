import React, {useEffect, useRef, useState, useLayoutEffect} from 'react';
import './App.css';
import kick from './Kick.mp3';
import snare from './snaretest.wav';
import kick2 from './Kick2.wav';
import hat from './Hat.wav';
import Loop1 from './Loop1.wav';
import Loop2 from './Loop2.wav';
import Lights from './Lights.wav';
import Camera from './Camera.wav';
import Action from './Action.wav';
import logo from './CRlogo.png';
import NA from './NA-title.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';


function App() {
  const drumkick = new Audio(kick);
  const snarehit = new Audio(snare);
  const drumkick2 = new Audio(kick2);
  const hihat = new Audio(hat);
  const loopOne = new Audio(Loop1);
  const loopTwo = new Audio(Loop2);
  const lights = new Audio(Lights);
  const camera = new Audio(Camera);
  const action = new Audio(Action);

  const [screenname, setScreenName] = useState("NEON ANGEL");
 
  const padOneClick = useRef(() => {
      drumkick.pause();
      drumkick.currentTime = 0;
      drumkick2.pause();
      drumkick2.currentTime = 0;
      snarehit.pause();
      snarehit.currentTime = 0;
      hihat.pause();
      hihat.currentTime = 0;
      loopOne.pause();
      loopOne.currentTime = 0;
      loopTwo.pause();
      loopTwo.currentTime = 0;
      lights.pause();
      lights.currentTime = 0;
      camera.pause();
      camera.currentTime = 0;
      action.pause();
      action.currentTime = 0;
      drumkick.play();
  });

  const padTwoClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    drumkick2.play();
  });

  const padThreeClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    snarehit.play();
  });

  const padFourClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    hihat.play();
  });
 
  const padFiveClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    loopOne.play();
  });

  const padSixClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    loopTwo.play();
  });

  const padSevenClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    lights.play();
  });

  const padEightClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    camera.play();
  });

  const padNineClick = useRef(() => {
    drumkick.pause();
    drumkick.currentTime = 0;
    drumkick2.pause();
    drumkick2.currentTime = 0;
    snarehit.pause();
    snarehit.currentTime = 0;
    hihat.pause();
    hihat.currentTime = 0;
    loopOne.pause();
    loopOne.currentTime = 0;
    loopTwo.pause();
    loopTwo.currentTime = 0;
    lights.pause();
    lights.currentTime = 0;
    camera.pause();
    camera.currentTime = 0;
    action.pause();
    action.currentTime = 0;
    action.play();
  });

  const playAudio = function(event) {
    switch (event.key) {
      case "q":
        document.getElementById("kick").click();
        document.getElementById("kick").classList.add("pad2");
        break;
      case "w":
        document.getElementById("kick-2").click();
        document.getElementById("kick-2").classList.add("pad2");
        break;
      case "e":
        document.getElementById("snare").click();
        document.getElementById("snare").classList.add("pad2");
        break;
        case "a":
        document.getElementById("hat").click();
        document.getElementById("hat").classList.add("pad2");
        break;
        case "s":
        document.getElementById("loop1").click();
        document.getElementById("loop1").classList.add("pad2");
        break;
        case "d":
        document.getElementById("loop2").click();
        document.getElementById("loop2").classList.add("pad2");
        break;
        case "z":
        document.getElementById("lights").click();
        document.getElementById("lights").classList.add("pad2");
        break;
        case "x":
        document.getElementById("camera").click();
        document.getElementById("camera").classList.add("pad2");
        break;
        case "c":
        document.getElementById("action").click();
        document.getElementById("action").classList.add("pad2");
        break;
        default:
        setScreenName();
    }
  }

  const lightOff = function(event) {
    switch (event.key) {
      case "q":
        document.getElementById("kick").classList.remove("pad2");
        break;
      case "w":
        document.getElementById("kick-2").classList.remove("pad2");
        break;
      case "e":
        document.getElementById("snare").classList.remove("pad2");
        break;
      case "a":
        document.getElementById("hat").classList.remove("pad2");  
        break;
      case "s":
        document.getElementById("loop1").classList.remove("pad2");  
        break;
      case "d":
        document.getElementById("loop2").classList.remove("pad2");  
        break;
      case "z":
        document.getElementById("lights").classList.remove("pad2");  
        break;
      case "x":
        document.getElementById("camera").classList.remove("pad2");  
        break;
      case "c":
        document.getElementById("action").classList.remove("pad2");  
        break;
      default:
        setScreenName();
    }
  }
 
  useLayoutEffect(() => {
    const pad1 = document.getElementById("kick");
    pad1.addEventListener("click", padOneClick.current);
    return () => pad1.removeEventListener("click", padOneClick.current);
  }); 

  useLayoutEffect(() => {
    const pad2 = document.getElementById("kick-2");
    pad2.addEventListener("click", padTwoClick.current);
    return () => pad2.removeEventListener("click", padTwoClick.current);
  }); 

  useLayoutEffect(() => {
    const pad3 = document.getElementById("snare");
    pad3.addEventListener("click", padThreeClick.current);
    return () => pad3.removeEventListener("click", padThreeClick.current);
  }); 

  useLayoutEffect(() => {
    const pad4 = document.getElementById("hat");
    pad4.addEventListener("click", padFourClick.current);
    return () => pad4.removeEventListener("click", padFourClick.current);
  }); 

  useLayoutEffect(() => {
    const pad5 = document.getElementById("loop1");
    pad5.addEventListener("click", padFiveClick.current);
    return () => pad5.removeEventListener("click", padFiveClick.current);
  }); 

  useLayoutEffect(() => {
    const pad6 = document.getElementById("loop2");
    pad6.addEventListener("click", padSixClick.current);
    return () => pad6.removeEventListener("click", padSixClick.current);
  }); 

  useLayoutEffect(() => {
    const pad7 = document.getElementById("lights");
    pad7.addEventListener("click", padSevenClick.current);
    return () => pad7.removeEventListener("click", padSevenClick.current);
  }); 

  useLayoutEffect(() => {
    const pad8 = document.getElementById("camera");
    pad8.addEventListener("click", padEightClick.current);
    return () => pad8.removeEventListener("click", padEightClick.current);
  }); 

  useLayoutEffect(() => {
    const pad9 = document.getElementById("action");
    pad9.addEventListener("click", padNineClick.current);
    return () => pad9.removeEventListener("click", padNineClick.current);
  }); 

  useLayoutEffect(() => {
    document.addEventListener("keydown", playAudio);
    return () => document.removeEventListener("keydown", playAudio);
  });
 
  useLayoutEffect(() => {
    document.addEventListener("keyup", lightOff);
    return () => document.removeEventListener("keyup", lightOff);
  }); 
  
  useLayoutEffect(() => {
    const testing = document.getElementById("Volume-slider");
    testing.addEventListener("input", volumeControl.current);
    return () => testing.removeEventListener("input", volumeControl.current);
  });

  const volumeControl = useRef((event) => {
    drumkick.volume = event.target.value;
    drumkick2.volume = event.target.value;
    snarehit.volume = event.target.value;
    hihat.volume = event.target.value;
    loopOne.volume = event.target.value;
    loopTwo.volume = event.target.value;
    lights.volume = event.target.value;
    camera.volume = event.target.value;
    action.volume = event.target.value;
  });

  const Spotify = <FontAwesomeIcon icon={faSpotify} />

  return (
    <div className="container">
      <p class="Error-message" style={{fontFamily:"monospace"}}>VIEW ON DESKTOP...</p>
      <img className="NA" src={NA} alt="Neon-Angel"></img>
      <p className="MPC">DRUM MACHINE</p>
      <div className="machine">
          <div className="Header">
          <p className="Billie">BILLIE ROGUE</p>
          <a href="https://open.spotify.com/album/6XZkmhXKPP1Bqni6N1lVvx?si=O9mmvC_LR1qLSNAMzrrrYg" target="_blank" id="Spotify">{Spotify}</a>
          </div>
        <div className="machine-div">
        <div id="PadContainer" className="pad-container">
          <button id="kick" onClick= {() => setScreenName("KICK")}type="button"  className="pad"></button>
          <button id="kick-2" onClick= {() => setScreenName("KICK 2")} type="button"  className="pad"></button>
          <button id="snare"  onClick= {() => setScreenName("SNARE")} type="button"  className="pad"></button>
          <button id="hat" onClick= {() => setScreenName("SNARE 2")} type="button"   className="pad"></button>
          <button id="loop1"  onClick={() => setScreenName("HI-HAT")}type="button"   className="pad"></button>
          <button id="loop2"  onClick={() => setScreenName("DRUM BREAK")} type="button"   className="pad"></button>
          <button id="lights" onClick= {() => setScreenName("DRUM BREAK 2")} type="button"    className="pad"></button>
          <button id="camera" onClick= {() => setScreenName("GUITAR")} type="button"  className="pad"></button>
          <button id="action" onClick= {() => setScreenName("LIGHTS/CAMERA/ACTION")} type="button"   className="pad"></button>
        </div>
        <div className="OtherContainer">
          <div className="screen">
            <p className="Padname">{screenname}</p> 
          </div>
          <div className="InnerContainer">
            <div className="Slider-wrapper">
            <input id="Volume-slider" defaultValue="0.5" step="0.01"  name="volume" type="range" min="0" max="1" />
            </div>
            <img className="logo" src={logo} alt="Chibi Rogue"></img>
          </div>
          <p id="Coded">CODED BY - SUNNY GIAN</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
