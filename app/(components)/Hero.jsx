"use client";
import React from 'react';
import { useState, useRef} from 'react';

function Hero() {
    const[currentIndex, setCurrentIndex]=useState(1);
    const[hasClicked, setHasClicked]=useState(false);
    const[issLoading, setIsLoading]=useState(true);
    const[loadedVideos, setLoadedVideos]=useState(0);

    const totalVideos=3;
    const nextVideoRef=useRef(null);

    const handleVideoLoad = ()=> {
        setLoadedVideos(prevState => prevState+1);
    }

    const getVideoSource = (index) =>{
        return `videos/hero-${index}.mp4`
    }

    //0/4 -> 0 +1=1
    //1/4 -> 1 +1=2
    //2/4 -> 2 +1=3
    //3/4 -> 3 +1=4
    //4/4 -> 4 +1=1


    const previousVideoIndex = (currentIndex - 1 + totalVideos) % totalVideos + 1;
    const currentVideoIndex = currentIndex;
    const nextVideoIndex = (currentIndex % totalVideos)+1;

    const upcomingVideoIndex = (currentIndex % totalVideos)+1;

    const handleVideoClick = ()=> {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
    <div id = "video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64
            cursor-pointer overflow-hidden rounded-lg">
                <div onClick={handleVideoClick} className="origin-center scale-50 opacity-0 
                transition-all ease-in hover:scale100 hover:opacity-100">
                    <video ref={nextVideoRef} src={getVideoSource(currentIndex+1)} 
                    loop muted id="current-video" className="size-64 origin-center scale-150 
                    object-cover object-center" onLoadedData={handleVideoLoad}/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
