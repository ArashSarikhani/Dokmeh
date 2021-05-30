import React, { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap-grid.css'
import './assets/sass/app.scss'
import Header from './presentor/header'
import ScrollDirection from './presentor/ScrollDirection'
import TextScramble from './presentor/TextScramble'



const App = () => {
  const scrollRef = useRef();
  const scroll = new LocomotiveScroll();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    },[]);
  });

  return (
    <>
      <>
        <div className="scroll" ref={scrollRef}>
          <div className="container-fluid">
            <header>
              <div className="row header_row" >
                <Header/>
              </div>
            </header>
            <div className="row">
              <div className="col-sm-5">
               <TextScramble/>
              </div>
            </div>
          </div>
          <ScrollDirection/>
        </div>
      </>
    </>
  );
};

export default App;
