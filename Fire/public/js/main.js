let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = "white";
ctx.fillRect(0, 0 , 400 , 400);
const fftSize = 2048;
let audioContext;
let analyser;
let audioElement;
let lineWidth;
/************************Audio Input**********************/
/* 
TODO:
  - Change song input
  - Reset Song on End
  - Add restart song capabilities
  - Add slider to play any part of the song
  - Next/Last song
*/
playButton.addEventListener('click', () => {
    if (audioContext) {
      if(audioContext.state === 'running'){
        //playing audio => pause it & set play button to say play
      audioContext.suspend().then(() => {
        playButton.textContent = "Play";
      });
    } else if (audioContext.state === 'suspended') {
      // paused audio => play it & set text to pause
      audioContext.resume().then(() => {
      playButton.textContent = "Pause";
      });
    }
  }
  else{ // if no audio context exists create one and an anaylser 
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = fftSize;
  
       // Path to mp3
      audioElement = new Audio('audio/ALLNIGHT.mp3');
  
      // connect analyser
      const audioSource = audioContext.createMediaElementSource(audioElement);
      audioSource.connect(analyser);
      audioSource.connect(audioContext.destination);
  
      // try playing and set play text to pause
      audioElement.play().catch((error) => {
        console.error("Error playing audio: " + error);
      });
      playButton.textContent = "Pause";
  
      //render
      visualize();
    }
   }); 

let sineWave = function(amplitude, frequency, numPoints , j, reversed){
  const increment = 200  / numPoints; // can change to be more than one sine cycle
  
  let x = j * increment;
  if (reversed) x += 200
  const y = (amplitude * Math.sin(frequency * x));
  return { x, y };
}


  
/*********************Audio Manipulation******************/
/*
TODO:
  - What to do...
    - FIRE
    - LETTERS 
    - HORIZON/SUNSET
    - SMOKE
    - ETC...
  - Page Design
  - Interactables...
    - GAS
    - WOOD
    - WATER
    - MATCH (PLAY)
    - ETC...

  maybe add features to have the fire get smaller over time
  maybe add glowing flames over time
  other modifiers to flame color, style, etc.
*/

let visualize = function(){
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const lineWidth = canvas.width / (2 * bufferLength);
    let rand1 = (Math.random() * 0.25) + 0.0001;
    let rand2 = (Math.random() * 0.) + 0.0001 ;

    for (let i = 0; i < bufferLength; i++) {
      let sine = sineWave(dataArray[i]  , 10, bufferLength, i, false);
      let reversed = sineWave(dataArray[i] , 10, bufferLength, bufferLength - i, true)
      ctx.fillRect(sine.x, 200 - sine.y, lineWidth, dataArray[i]);
      ctx.fillRect(reversed.x,200 -reversed.y, lineWidth,dataArray[i]);

    }
    
    requestAnimationFrame(visualize);
    
    
}

// take those groups of audio and have the resemble the audio playing and fire
// audio can range from 
    // soft to Loud
    // left to right

// fire is more random and will prob try to cluster ranges that are loud towards a central point
// will need to incoporate randomness and spikes 
// what does fire look like in 2d?
    // prob sin waves that start at different points and flow upwards

