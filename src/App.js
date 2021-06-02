import React, { useState, useEffect, useRef } from 'react';
import locomotiveScroll from "locomotive-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap-grid.css'
import './assets/sass/app.scss'
import Header from './presentor/header'
import ScrollDirection from './presentor/ScrollDirection'
import TextScramble from './presentor/TextScramble'
import Party from  './presentor/Party'
import BackGround from './presentor/BackGround';


const App = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <>
        
        <section>
         <BackGround/>
        </section>

        <div className="container-fluid">
          <header className="c-header">
            <Header/>
          </header>
          <div className="header_hidden"></div>
          <div className="o-scroll" data-scroll-container ref={scrollRef} >
            <section style={{height:"500px"}}>
                <div className="row">
                  <div className="col-sm-5">
                  <TextScramble/>
                  </div>
                  <div className="col-sm-5">
                    <Party/>
                  </div>
                </div>
            </section>
            <section>
              <div className={"c_section_1"} >
                <ScrollDirection/>
              </div>
            </section>
          </div>

        </div>
       
       
    </>
  );
};

export default App;
