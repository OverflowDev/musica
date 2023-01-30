import { useContext } from 'react'
import {Link} from 'react-router-dom'

import PlaylistContext from '../context/PlaylistContext'

// import {charts} from '../chart'


function TopSongs() {

    const {playlists} = useContext(PlaylistContext)

    // console.log(playlists[2].songs)

  return (
    <div>
        <div className='flex flex-col mb-20 space-y-4 md:mt-0 mt-3'>
            <h1 className='text-light tracking-wider font-bold'>Top Songs</h1>

            {playlists.map((chart) => {
                return (
                    <Link key={chart.id} to={`/album/${chart.id}`} className='hover:bg-album bg-dark-alt md:w-5/6 md:h-24 rounded-2xl md:px-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <img src={chart.image} alt="image1" className='rounded-3xl object-cover h-24 w-24 md:p-3 p-2' />
                                <div className='flex-col p-3'>
                                    <h1 className='text-light text-md'>{chart.albumTitle}</h1>
                                    <h1 className='text-sm'>{chart.artist}</h1>
                                    {/* <h1 className='text-sm text-light'>2:30:45</h1> */}
                                </div>
                            </div>
                            <button className='flex items-center justify-center h-10 w-10 rounded-full border border-secondary'>
                                {chart.favorite ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg> 
                                    :                                          
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                }
                            </button>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default TopSongs