let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = "white";
ctx.fillRect(0, 0 , 400 , 400);
const fftSize = 2048;
let audioContext;
let analyser;
let audioElement;
let lineWidth = 3
/************************Audio Input**********************/
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
  }else{ // if no audio context exists create one and an anaylser 
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


  
/*********************Audio Manipulation******************/
let visualize = function(){
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = 'black';
    for (let i = 0; i < bufferLength; i++) {
        const amplitude = dataArray[i]/255 ;
        const barHeight = amplitude 
        ctx.fillRect(100, 100, lineWidth, barHeight);
    }
    requestAnimationFrame(visualize);
}
// I want to take in audio and group it into bins
// prob along a straight line to start
// take those groups of audio and have the resemble the audio playing and fire
// audio can range from 
    // soft to Loud
    // left to right

// fire is more random and will prob try to cluster ranges that are loud towards a central point
// will need to incoporate randomness and spikes 
// what does fire look like in 2d?
    // prob sin waves that start at different points and flow upwards

// maybe have features to add wood, gas, strike a match to start 
// maybe add features to have the fire get smaller over time
// maybe add glowing flames over time
// other modifiers to flame color, style, etc.
