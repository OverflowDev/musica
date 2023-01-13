import {useState, useRef, useEffect} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import release2 from '../assets/release2.svg'

import lauren from '../assets/audio/lauren.mp3'
import neon from '../assets/audio/neon.mp3'
import mavrick from '../assets/audio/mavrick.mp3'

const playlist = [lauren, neon, mavrick]

function Play() {

    const [index, setIndex] = useState(0)
    const [currentSong] = useState(playlist[index])

    // states 
    const [isPlaying, setIsPlaying] = useState(false)

    const [volume, setVolume] = useState(50)
    const [mute, setMute] = useState(false)

    const [duration, setDuration] = useState(0)
    const [elapsed, setElapsed] = useState(0)

    // References 
    const audioPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()
    // const volumeBar = useRef()

    // const loadedMetadata = audioPlayer?.current?.loadedmetadata
    // const ready = audioPlayer?.current?.readyState

    // useEffects 
    useEffect(() => {

        if(audioPlayer){
            audioPlayer.current.volume = volume / 100  ;
        }

        // if(isPlaying){
        //     // setInterval(() => {
        //         const _duration = Math.floor(audioPlayer?.current?.duration)
        //         const _elapsed = Math.floor(audioPlayer?.current?.currentTime)
        
        //         setDuration(_duration)
        //         setElapsed(_elapsed)
        //     // }, 100)
        // }
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds

    }, [volume, audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    // Calculate time funcion 
    const calculateTime = (secs) => {
        if(secs && !isNaN(secs)){
            const minutes = Math.floor(secs / 60)
            const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
            const seconds = Math.floor(secs % 60)
            const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

            return `${returnedMinutes}:${returnedSeconds}`
        }

        return '00:00'
    }

    // Toggle Play and Pause
    const togglePlayPause = () => {
        const prev = isPlaying
        setIsPlaying(!prev)

        if(!prev){
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    // Forward and Backward 
    const toggleForward = () => {
        audioPlayer.current.currentTime += 10;

    }
    const toggleBackward = () => {
        audioPlayer.current.currentTime -= 10;
 
    }

    const toggleSkipForward = () => {
        if(index >= playlist.length - 1) {
            setIndex(0)
            audioPlayer.current.src = playlist[0]
            audioPlayer.current.play()
        } else {
            setIndex(prev => prev + 1)
            audioPlayer.current.src = playlist[index + 1]
            audioPlayer.current.play()
        }
    }

    const toggleSkipBackward = () => {
        if(index > 0) {
            setIndex(prev => prev - 1)
            audioPlayer.current.src = playlist[index -1]
            audioPlayer.current.play()
        }
    }

    // onChange 
    const changeVolume = (e) => {
        // audioPlayer.volume = volumeBar.current.value
        // setVolume(volumeBar.current.value)
        setVolume(e.target.value)
  
    }

    const changeProgress = (e) => {
        audioPlayer.current.currentTime = progressBar.current.value
        setElapsed(progressBar.current.value)
    }
    
    // WhilePlaying 
    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        setElapsed(progressBar.current.value)
        animationRef.current = requestAnimationFrame(whilePlaying) 
    }

    

    // const changeRange = () => {
    //     audioPlayer.current.currentTime = progressBar.current.value;
    //     progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    //     setElapsed(progressBar.current.value);
    //   }


  return (
    <div className='fixed bottom-0'>
        <div className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-t border-main w-screen py-1 ">
            <div className=' flex flex-nowrap items-center justify-around'>
                {/* Image  */}
                
                <div className='flex flex-start items-center space-x-4 text-light'>
                    <img src={release2} alt="release" className='h-16 object-cover w-16 rounded-2xl' />
                    <div>
                        <h1 className='text-md font-semibold tracking-wide'>Seasons In</h1>
                        <h1 className='text-sm'>James</h1>
                    </div>
                </div>
                {/* Play  */}
                <div className='flex self-center items-center justify-center md:gap-x-12 gap-4 '>
                    {/* Audio  */}
                    <audio 
                        ref={audioPlayer}
                        // src="https://www.ceenaija.com/wp-content/uploads/2019/07/Lauren-Daigle-Rescue-CeeNaija.com_.mp3" 
                        src={currentSong} 
                        preload='metadata'
                        muted={mute}
                    ></audio>
                    
                    {/* Shuffle  */}
                    <button className='lg:block hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                        </svg>
                    </button>
                    {/* Backward  */}
                    {/* <button className='' onClick={toggleBackward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                        </svg>
                    </button> */}
                    <button className='' onClick={toggleSkipBackward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                        </svg>
                    </button>
                    {/* Play and Pause */}
                    <button className='' onClick={togglePlayPause}>
                        { isPlaying ? 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-secondary ">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clipRule="evenodd" />
                            </svg>                          
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-secondary">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>
                        }
                    </button>
                    {/* Forward  */}
                    {/* <button className='' onClick={toggleForward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                        </svg>
                    </button> */}
                    <button className='' onClick={toggleSkipForward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                        </svg>
                    </button>
                    {/* Loop  */}
                    <button className='lg:block hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {/* Volume  */}
                <div className='hidden lg:flex items-center gap-2'>
                    <button className='flex items-center transition delay-150 duration-200' onClick={() => setMute(!mute)}>
                        {mute ? 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                            </svg>                                                    
                            : (volume <= 20) ? 
                            <ion-icon name="volume-off" size='large'></ion-icon>
                            : (volume <= 75 ) ? 
                            <ion-icon name="volume-low" size='large'></ion-icon>
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                            </svg>

                        }
                    </button>
                    <div className='flex items-center border-3 w-24'>
                        <input 
                            // ref={volumeBar}
                            type="range" 
                            className='h-1 accent-light rounded-full outline-none'
                            // min={0} 
                            // max={100} 
                            value={volume}
                            // defaultValue={0}
                            onChange={changeVolume} 
                        />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center py-2">
                <div className='flex items-center justify-center gap-4 w-5/12'>
                    <div className='text-sm'>
                        {calculateTime(elapsed)}
                    </div>

                    <div className='flex items-center'>
                        <input 
                            ref={progressBar}
                            type="range" 
                            className='w-96 h-1 accent-secondary rounded-md  outline-none'
                            // value={elapsed}
                            // min={0}
                            // max={duration}  
                            defaultValue={0}
                            onChange={changeProgress}
                        />
                    </div>
                    <div className='text-sm'>
                        {calculateTime(duration)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Play