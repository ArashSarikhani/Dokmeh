import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap-grid.css'



const header = () => {


    return (
       <>
            <div className="col-sm-2">
                <div className="header__about">
                    <a className="header__text" href="">
                        <span>درباره‌ی ما</span>
                        <span className="header__en">En</span>
                    </a>
                </div>
            </div>
            <a href="https://www.dokmeh.co/" class="identity">
            <svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1089.23 341.63">
                <path d="M303.19,90.17h54.42c51.28,0,90,37.48,90,85.85s-38.69,85.87-90,85.87H303.19Zm54.42,145.6c36.77,0,61.43-25.88,61.43-59.75s-24.66-59.74-61.43-59.74H331.25V235.77Z" transform="translate(-6.89 -6.19)" style={{fill:'#594D49'}}></path>
                <path d="M445,201.42c0-34.59,27.09-62.4,62.9-62.4s62.88,27.81,62.88,62.4-27.09,62.41-62.88,62.41S445,236,445,201.42m98.44,0c0-21.28-14.5-37.49-35.54-37.49s-35.81,16.21-35.81,37.49,14.76,37.5,35.81,37.5,35.54-16.21,35.54-37.5" transform="translate(-6.89 -6.19)" style={{fill:'#594D49'}}></path>
                <polygon points="563.77 83.98 590.38 83.98 590.38 189.92 645.84 134.78 678.5 134.78 620.86 191.85 677.46 255.71 643.83 255.71 590.38 195.24 590.38 255.71 563.77 255.71 563.77 83.98" style={{fill:'#594D49'}}></polygon>
                <path d="M762.15,193.68c0-16.93-8.22-30-24.66-30-11.61,0-21.29,6.77-26.13,17.9v80.3H684.75V141h26.61v11.12c8.23-9.19,20.32-13.06,31.69-13.06,16.44,0,28.3,7,35.8,17.9,8.7-11.12,23.21-17.9,39.66-17.9,30.72,0,47.17,21.29,47.17,51.52v71.35H839.07V193.68c0-16.93-8-30-24.43-30-11.36,0-21,6.05-26.36,18.87.24,2.66.48,5.32.48,8v71.35H762.15Z" transform="translate(-6.89 -6.19)" style={{fill:'#594D49'}}></path>
                <path d="M986.55,90.17h26.61v62.15c8.46-9.43,21.28-13.3,34.1-13.3,29.75,0,48.85,20.56,48.85,51.52v71.35H1069.5V193.68c0-17.17-9.66-30-27.56-30-13.31,0-23.71,7.26-28.78,19.84v78.36H986.55Z" transform="translate(-6.89 -6.19)" style={{fill:'#594D49'}}></path>
                <path d="M926.76,262.94c-35.56,0-61.09-26.25-61.09-62.05,0-35.31,24.58-62,61.34-62,36.5,0,62,27.92,59.64,68.49h-95c1,18.13,14.79,32.45,36,32.45,13.12,0,24.58-5.25,30.07-16.7h27.44c-6.68,22.43-28.16,39.85-58.46,39.85m-34.13-74.21h65.86c-4.06-19.34-17.66-27.92-32.21-27.92-16.47,0-30.07,9.54-33.65,27.92" transform="translate(-6.89 -6.19)" style={{fill:'#594D49'}}></path>
                <path d="M212.38,345.65,86.08,219.35a3.64,3.64,0,0,1,0-5.16L212.38,87.88c5.74-5.73,15.09,1,11.47,8.26,0,0-45.53,78.47-63.75,111.93a18.1,18.1,0,0,0,0,17.4c18.22,33.46,63.75,111.93,63.75,111.93,3.62,7.26-5.73,14-11.47,8.25" transform="translate(-6.89 -6.19)" style={{fill:'#594D49'}}></path>
                <path d="M19.16,8.34l126.3,126.31a3.64,3.64,0,0,1,0,5.16L19.16,266.12c-5.74,5.73-15.09-1-11.46-8.26,0,0,44.09-78.77,61.85-112.07a18.15,18.15,0,0,0,0-17.12C51.79,95.37,7.7,16.6,7.7,16.6c-3.63-7.26,5.72-14,11.46-8.26" transform="translate(-6.89 -6.19)" style={{fill:'#594D49'}}></path>
            </svg>
            </a>
       </>
    )
}

export default header;
