# Neon Angel Drum Machine

A drum machine I made using sounds from "Neon Angel" by artist Billie Rogue.

### Tools Used
- create-react-app


### Features
- click a pad to play a sound 
- pads can also be triggered by using the q,w,e,a,s,d,z,x,c keys
- sounds can be played consecutively, cutting off other sounds to emulate a real drum machine
- adjust the volume using the slider
- screen showing which sound is being played

### Challenges and Lessons Learned
This was a really challenging project for me as a beginner, getting all the sounds to play as I intended was difficult.

- had issues figuring out how to trigger sounds consecutively 
  - initially had each pad (`<button>`) trigger the `audio play()` method with an `onClick` attribute
    - while this succeeded in getting the sounds to play, I could not get the sounds to play immediately after each other when i clicked the pads consecutively; I had to wait 
      for the audio to finish playing before i could play it again
  - next I tried using the `useState()` hook to trigger state changes with `onClick`, each click would call the `useState()` function that would have the `audio play()` method as a callback function
    - while this achieved my desired effect of getting the sounds to play immediately after each other, the sounds would stack up upon the third and subsequent clicks resulting in a messy jumbled sound 
  - eventually solved this issue by using event listeners with a `"click"` event instead of `onClick`to trigger the `audio play()` methods
- although I figured out how to play the sounds consecutively, the sounds were not cutting off each other as I hoped - i.e., if I trigger one pad while audio is playing from another pad,
  both sounds would play at the same time; I wanted the first sound to stop while the second one plays 
  - I solved this issue by creating a function for each individual pad that calls the `audio pause()` method and `currentTime` property, each function would then be passed to the event listener which in turn is passed to a `useEffect()` hook that cleans up the event listener
  - as each pad is clicked, the `audio pause()` method would be called and `currentTime` would be set to `0`for each audio object before the triggered sound is played 
    - `const padOneClick = () => {
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
  };`
 - another issue arose while using a `useState()` hook to change the text on the screen to match the pad being triggered; the sounds would stop cutting each other off again 
   - this was solved by passing the previously aformentioned functions into a `useRef()` hook
     - `const padOneClick = useRef(() => {
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
  });`
 - had difficulty figuring out how to get the "light up" effect of the pads to disappear when releasing the keys 
   - solved by using a `keyup` event with a switch statement to remove the added css class from the pads
     - ` const lightOff = function(event) {
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
  }`
  
    `useLayoutEffect(() => {
      document.addEventListener("keyup", lightOff);
      return () => document.removeEventListener("keyup", lightOff);
    }); `
 - the volume slider would not move when i set `Value` to `0.5` and `Step` to `0.01`
   - solved by changing `Value` to `defaultValue`
 - had a little trouble using flexbox to align everything within the drum machine
   - took more time than expected to get my desired layout, I should have planned out the layout beforehand instead of changing things on the fly 
 - everything works as intended on Chrome but sounds don't play as expected on Safari versions 14.2.1 and newer; some sounds (mainly the solo drums) don't play on second and subsequent clicks
   - narrowed down the issue to the `currentTime` property
     - `currentTime` causes a bug that slightly cuts off the beginning of the audio by a couple milliseconds on subsequent clicks, unresolved as of now
 - overall, the quality and structure of my code ended up being a bit bloated and messy
   - have to start using and become more comfortable with react props 
   - would have been better to split my app into smaller components instead 

