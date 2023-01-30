// import {useState, useRef} from 'react'
import { useState,useContext } from 'react'

import PlaylistContext from '../context/PlaylistContext'
// import { playlist } from '../songs'

function Release() {

    
    const {songs, setCurrent, currentSong} = useContext(PlaylistContext)
    // const [data, setData] = useState([])


  return (
    <div className=''>

        <h1 className='text-3xl font-semibold text-light tracking-wide'>New Release</h1>
        <div className='h-96 max-h-96 flex gap-x-6 mt-6 overflow-y-hidden scrollbar-hide'>
            {/* <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${release})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div> */}
            {
                songs.map((song, i) => {
                    return ( 
                        <div className='' key={i}>
                            <div className={`relative max-w-md w-32 h-32 md:w-40 md:h-40 my-4 shadow-sm rounded-lg ${currentSong === i ? 'border-2 border-light' : ''}`}>
                                <img src={song.image} alt="Features" className='w-full h-full object-cover rounded-lg' />
                                <div className='mt-2'>
                                    <div className="flex-col w-fit">
                                        <h1 className="text-secondary md:text-md text-sm font-semibold tracking-wider">{song.title}</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className="text-light text-xs">{song.artist}</h1>
                                        <button 
                                            onClick={()=> setCurrent(i)}
                                            className='flex items-center w-10 h-10bg-secondary bg-opacity-50 backdrop-blur-md rounded-full p-1'
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Release