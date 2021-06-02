import React, { useState, useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';



const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
}



const Party = () => {

    const [animationInstance, setAnimationInstance] = useState(false);

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getAnimationSettings(originXA, originXB) {
        return {
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          zIndex: 0,
          particleCount: 150,
          origin: {
            x: randomInRange(originXA, originXB),
            y: Math.random() - 0.2
          }
        }
    }

    function nextTickAnimation () {
        setAnimationInstance(getAnimationSettings(0.1, 0.3));
        // setAnimationInstance(getAnimationSettings(0.7, 0.9));
    }

    
    const startAnimation = event => {
        let intervalId =  setInterval(nextTickAnimation(), 400);
        setTimeout(() => {
          clearInterval(intervalId)
        }, 5000); 
    }
      
    
    function getInstance (instance) {
        setAnimationInstance(instance)
    }


    return (
        <>
            <div>
                <button onClick={startAnimation()}>Start</button>
            </div>
            <ReactCanvasConfetti refConfetti={getInstance()} style={canvasStyles}/>              
        </>
    )
}

export default Party;
