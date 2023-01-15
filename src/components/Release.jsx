// import {useState, useRef} from 'react'

import { playlist } from '../songs'

function Release() {

// Note
// set onClick={() => {
//     SetCurrent(i)
//   }} on the first div in the map 

// in INITIAL STATE 
// set_current will dispatch data to current_song(initial_state)

// in control 
// receive the current song and use it the state 
// song[current_song].url 

  return (
    <div className=''>

        <h1 className='text-3xl font-semibold text-light tracking-wide'>New Release</h1>
        <div className='h-96 max-h-96 flex gap-x-6 mt-6 overflow-y-hidden scrollbar-hide'>
            {/* <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${release})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div> */}
            {
                playlist.map((song, i) => {
                    return ( 
                        <div className='' key={i}>
                            <div className="group relative max-w-md w-32 h-32 md:w-40 md:h-40 my-4 shadow-sm rounded-lg">
                                <img src={song.image} alt="Features" className='w-full h-full object-cover rounded-lg' />
                                <div className="flex-col w-fit">
                                    <h1 className="text-secondary md:text-md text-sm font-semibold tracking-wider">{song.title}</h1>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h1 className="text-light text-xs">{song.artist}</h1>
                                    <button className='flex items-center w-10 h-10bg-secondary bg-opacity-50 backdrop-blur-md rounded-full p-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                        </svg>
                                    </button>
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