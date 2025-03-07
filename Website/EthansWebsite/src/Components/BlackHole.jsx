import React, { useRef, useEffect, useState } from 'react';
import Switch from './Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faFileAudio} from '@fortawesome/free-solid-svg-icons';
var hasFile = false;
const BlackHole = () => {
    const ref = useRef(null);
    const audioRef = useRef(null);
    const animationRef = useRef(null); 
    const [file, setFile] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    let lineWidth = 3; 
    let WHITE = "#fff";
    let BLACK = "#000";
    let fft = 512;
    

    
    const defaultFilePath = '/public/Resources/secrets.mp3';

    const handleFileChange = (event) => {
        hasFile == true;
        const uploadedFile = event.target.files[0];
            setFile(uploadedFile); // Store the uploaded MP3 file
    };

    useEffect(() => {
        const canvas = ref.current;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        let circleRadius = Math.min(centerX, centerY) - 150;
        const ctx = canvas.getContext('2d');
        
        

        const audioFile = file || new File([defaultFilePath], defaultFilePath, { type: 'audio/mpeg' });

        if (!audioFile){

            return;
        } 
        const audioElement = new Audio(URL.createObjectURL(audioFile)); 
        audioRef.current = audioElement;

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = fft;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const visualize = () => {
            
            analyser.getByteFrequencyData(dataArray);
            
            // Clear the canvas
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            //draw white circle the size of the radius
            ctx.fillStyle = WHITE;
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.arc(centerX, centerY, circleRadius + 2, 0, 2 * Math.PI);
            ctx.fill();


            
            const angleIncrement = (Math.PI)**3 / bufferLength;
            let angle = 0 ;
            for (let i = 0; i < bufferLength; i++) {
                const amplitude =  dataArray[i]/75;
                const barHeight =  amplitude * circleRadius;

                const barAngle =  i * angleIncrement;

                const barX = centerX - circleRadius * Math.cos(barAngle);
                const barY = centerY - circleRadius * Math.sin(barAngle);

                
                ctx.fillStyle = WHITE;
                ctx.save();
                ctx.translate(barX, barY);
                ctx.rotate(barAngle);
                ctx.fillRect(0, 0, lineWidth, barHeight);
                ctx.restore();

                
                angle += angleIncrement;
            }

            if (isPlaying) {
                animationRef.current = requestAnimationFrame(visualize);
            }
        };

        if (isPlaying) {
            audioContext.resume();
            audioElement.play(); 
            visualize(); 
        } else {
            audioElement.pause(); 
            cancelAnimationFrame(animationRef.current); 
            ctx.clearRect(0, 0, canvasWidth, canvasHeight); 
        }


        return () => {
            audioElement.pause();
            audioElement.src = "";
            cancelAnimationFrame(animationRef.current);
        };
    }, [isPlaying, file]);


    return (
        <>
            
            <div id="music">
                <div id='musicControls'>
                    <FontAwesomeIcon id="note" icon={faMusic} />    
                    <Switch onClick={() => setIsPlaying(!isPlaying)}></Switch>
                    <FileInput handleFileChange={handleFileChange}/>
                </div>
                <div className='musicContainer'>
                    <canvas id="canvas" ref={ref} width={400} height={400} />
                    <div className='circle'></div>
                    <div className="hole">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
            
            
        </>
    );
};
const FileInput = ({ handleFileChange }) => (
    <div className="file-input-container">
      <input
        type="file"
        id="fileInput"
        className="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="file-label">
        {!hasFile ? (<FontAwesomeIcon icon={faFileAudio} className="icon" />):(<FontAwesomeIcon icon={faMusic} className="icon" />)}
        
      </label>
    </div>
  );
export default BlackHole;
