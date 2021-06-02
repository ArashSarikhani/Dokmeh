import React, { useState, useEffect, useRef } from 'react';
import { useMousePosition } from "../helper/useMousePosition";
import {useWindowDimensions} from '../helper/useWindowDimensions';


const BackGround = () => { 


  
  const { height, width } = useWindowDimensions();
  const position = useMousePosition();

  const ctxRef = useRef();
  const canvasRef = useRef();
  const mouseRef = useRef();
  const [mouseMovex, setMouseMovex] = useState()


  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size= size;
      this.color = color
    }
  
    draw(){
      ctxRef.current.beginPath();
      ctxRef.current.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
      ctxRef.current.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctxRef.current.fill();
    }
  
    update() {
      if (this.x > width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > height || this.x < 0) {
        this.directionY = -this.directionY
      }
  
      let dx = position.x - this.x;
      let dy = position.y - this.y;
      let distance = Math.sqrt(dx*dx + dy*dy)
      if (distance < (height/(80) * width/(80)) + this.size) {
        if (position.x < this.x && this.x < width - this.size * 10) {
          this.x += 10;
        }
        if (position.x > this.x && this.x > this.size * 10 ) {
          this.x -= 10;
        }
        if (position.y < this.y && this.y < height - this.size * 10) {
          this.y += 10;
        }
        if (position.y > this.y && this.y > this.size * 10)  {
          this.y -= 10;
        }
      }
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }

  let particleArray;

  

  const inits = () => {
    particleArray = [];
    let numberOfParticles = (canvasRef.current.height * canvasRef.current.width) / 9000;
    for (let i = 0; i < numberOfParticles*1.2; i++){
      let size = (Math.random() * 5 ) + 1
      let x = (Math.random() * ((width - size * 1) - (size * 1)) + size * 1);
      let y = (Math.random() * ((height - size * 1) - (size * 1)) + size * 1);
      let directionX = (Math.random() * 5) - 2.5;
      let directionY = (Math.random() * 5) - 2.5;
      let color = '#ccc'
      particleArray.push(new Particle(x, y, directionX, directionY, size, color))
    }
    
  
  }

  const connet = () => {
    let opacityValue = 0.5
    for (let a = 0; a < particleArray.length; a++) {
      for (let b = a; b < particleArray.length; b++) {
        let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
        + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
        if (distance < (canvasRef.current.width/7) * (canvasRef.current.height/7)) {
          opacityValue = 0.5 - (distance/50000);
          ctxRef.current.strokeStyle =`rgba(255, 255, 255, ${opacityValue})`;
          ctxRef.current.lineWidth = 1;
          ctxRef.current.beginPath();
          ctxRef.current.moveTo(particleArray[a].x, particleArray[a].y);
          ctxRef.current.lineTo(particleArray[b].x, particleArray[b].y);
          ctxRef.current.stroke();
        }
      }
    }
  }

  const animate = () => {
    requestAnimationFrame(animate);
    ctxRef.current.clearRect(0,0,width, height);
  
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
    connet();
  }

  


  useEffect(() => {
    canvasRef.current = document.getElementById("canvas1");
    ctxRef.current = canvasRef.current.getContext('2d');
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    mouseRef.current = {
      x: position.x,
      y:position.y,
      radius: (canvasRef.current.height/(80) * canvasRef.current.width/80)
    }
    inits();
    animate();
    
    

  }, []); 

  return (
    <>
    
      <canvas  id="canvas1"></canvas>
      {/* width: {width} ~ height: {height}
      {position.x}:{position.y} */}

    </>
  )
}


export default BackGround;