import React, { useState, useEffect, useRef } from 'react';


const Scroll = () => {
    return (
        <>
            <div class="c-direction-block_wrapper">
                <div class="c-direction-block" id="direction">
                    <div class="c-direction-block_item -one">
                        <span class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#direction" data-scroll-delay="0.05">
                            LET'S F*** THE WORLD . 🖕LET'S F*** THE WORLD .  LET'S F*** THE WORLD . 🖕LET'S F*** THE WORLD . LET'S F*** THE WORLD . 🖕LET'S F*** THE WORLD . 
                        </span>
                    </div>
                    <div class="c-direction-block_item -two">
                        <span class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9" data-scroll-target="#direction" data-scroll-delay="0.05">
                            LET'S F*** THE WORLD . 🖕LET'S F*** THE WORLD . LET'S F*** THE WORLD . 🖕LET'S F*** THE WORLD . LET'S F*** THE WORLD . 🖕LET'S F*** THE WORLD .  
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Scroll;