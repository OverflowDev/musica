import {useState, useRef, useEffect} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {playlist} from '../songs'


function Play() {
    // Note 
    // Add a function if a music is clicked, a function that set is Playing to true 

    const [songs, setSongs] = useState(playlist)
    // const [index, setIndex] = useState(0)
    const [currentSong, setCurrentSong] = useState(songs[0])

    // states 
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoop, setIsLoop] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)

    // const check = Math.floor(Math.random() * songs.length)
    // console.log(isShuffle)

    // console(isShuffle)

    const [volume, setVolume] = useState(50)
    const [mute, setMute] = useState(false)

    const [elapsed, setElapsed] = useState(0)
    const [duration, setDuration] = useState(0)

    // References 
    const audioPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()


    // useEffects 
    useEffect(() => {

        if(audioPlayer){
            audioPlayer.current.volume = volume / 100  ;
        }

        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds

    }, [volume, audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])
    // }, [volume, isPlaying])

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
        setIsPlaying(!isPlaying)
    }

    // WhilePlaying 
    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        setElapsed(progressBar.current.value)
        animationRef.current = requestAnimationFrame(whilePlaying) 
    }

    useEffect(() => {
        if(isPlaying){
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    })

    // Range / SLider 
    const changeProgress = (e) => {
        audioPlayer.current.currentTime = progressBar.current.value
        setElapsed(progressBar.current.value)
    }

    // Previous and Next 
    const toggleSkipForward = () => {

        const index = songs.findIndex(x => x.id == currentSong.id)

        
        // if(isShuffle) {
        //     setCurrentSong(~~(Math.random() * songs.length))
        // }
        if (index == songs.length - 1)
        {
          setCurrentSong(songs[0])
        }
        else
        {
            setCurrentSong(songs[index + 1])
        }
        audioPlayer.current.currentTime = 0;
    }

    const toggleSkipBackward = () => {

        const index = songs.findIndex(x=>x.id == currentSong.id)

        // if(isShuffle) {
        //     setCurrentSong(~~(Math.random() * songs.length))
        // }

        if (index == 0)
        {
          setCurrentSong(songs[songs.length - 1])
        }
        else
        {
          setCurrentSong(songs[index - 1])
        }
        audioPlayer.current.currentTime = 0;
    }

    // Ended and Loop
    useEffect(() => {

    // if(isShuffle) {
    //     setCurrentSong(Math.floor(Math.random() * songs.length))
    // }
      audioPlayer.current.onended = () => {
            toggleSkipForward()
        // toggleSkipForward()
      }

        // Loop 
        audioPlayer.current.loop = isLoop
    })


    // onChange 
    const changeVolume = (e) => {
        setVolume(e.target.value)
    }
    


  return (
    <div className='fixed inset-x-0 bottom-0'>
        {/* {isPlaying && */}
        <div className="bg-main bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-t border-main w-screen py-2 h-full">
            <div className=' flex flex-nowrap items-center justify-around'>
                {/* Image  */}
                
                <div className='flex flex-start items-center space-x-4 text-light'>
                    <img src={currentSong.image } alt="release" className='h-16 object-cover w-16 rounded-2xl' />
                    <div>
                        <h1 className='text-md font-semibold tracking-wide'>{currentSong.title}</h1>
                        <h1 className='text-sm'>{currentSong.artist}</h1>
                    </div>
                </div>
                {/* Play  */}
                <div className='flex items-center justify-center md:gap-x-12 gap-4 '>
                    {/* Audio  */}
                    <audio 
                        ref={audioPlayer}
                        // src="https://www.ceenaija.com/wp-content/uploads/2019/07/Lauren-Daigle-Rescue-CeeNaija.com_.mp3" 
                        src={currentSong.url} 
                        preload='metadata'
                        muted={mute}
                    ></audio>
                    
                    {/* Shuffle  */}
                    <button className='lg:block hidden' onClick={() => setIsShuffle((prev) => !prev)}>
                       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className={`w-6 h-6 ${isShuffle ? 'text-white' : ''}`}>
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M18 4l3 3-3 3M18 20l3-3-3-3" />
                            <path d="M3 7h3a5 5 0 015 5 5 5 0 005 5h5M21 7h-5a4.978 4.978 0 00-2.998.998M9 16.001A4.984 4.984 0 016 17H3" />
                        </svg>
                    </button>
                    {/* Backward  */}
                    {/* <button className='' onClick={toggleBackward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                        </svg>
                    </button> */}
                    <button className='' 
                        onClick={toggleSkipBackward}
                    >
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
                    <button className='' 
                        onClick={toggleSkipForward}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                        </svg>
                    </button>
                    {/* Loop  */}
                    <button 
                        className='lg:block hidden'
                        onClick={() => setIsLoop(!isLoop)}
                    >
                        {isLoop ? 
                                <svg viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6'>
                                <path d="M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z" />
                              </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6'>
                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                            </svg>
                        }
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
            <div className="flex items-center justify-center">
                <div className='flex items-center justify-center gap-4 w-5/12'>
                    <div className='text-sm text-light'>
                        {calculateTime(elapsed)}
                    </div>

                    <div className='flex items-center'>
                        <input 
                            ref={progressBar}
                            type="range" 
                            className='md:w-96 w-screen h-1 test rounded-md accent-secondary ring-0 focus:ring-0 outline-none'
                            // value={elapsed}
                            // min={0}
                            // max={duration}  
                            defaultValue={0}
                            onChange={changeProgress}
                        />
                    </div>
                    <div className='text-sm text-light'>
                        {calculateTime(duration)}
                    </div>
                </div>
            </div>
        </div>
        {/* // } */}
    </div>
  )
}

export default Play