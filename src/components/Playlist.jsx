import {useContext} from 'react'
import { playlist } from '../songs'

// import PlaylistContext from './context/PlaylistContext'

function Playlist() {
    // const {songslist, setCurrent, currenSong} = useContext(PlaylistContext)
  return (
    <div className='border h-screen'>
        <h1 className='text-3xl font-semibold text-light tracking-wide'>New Songs</h1>
        <div className='flex flex-wrap gap-x-6 '>
            {playlist.map((song, i) => {
                return (
                    <div 
                        // onClick={() => setCurrent(i)}
                        key={i}
                        // className={`flex ${currenSong === i} ? 'border-2 border-secondary' : ''`}
                    >
                        <div className="group overflow-hidden relative max-w-md w-72 h-64 md:w-64 md:h-64 my-4 shadow-sm rounded-lg">
                            <img src={song.image} alt="Features" className='w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-0 group-hover:scale-110' />
                            <div className="flex-col group-hover:bottom-6 text-center absolute md:bottom-2 md:left-1 bottom-8 left-1 duration-300 ease-in delay-100">
                                <h1 className="text-secondary text-lg font-semibold tracking-wider">{song.title}</h1>
                                <h1 className="text-darrk-alt text-xs">{song.artist}</h1>
                            </div>
                            <button className='flex items-center md:group-hover:right-3  absolute md:-right-14 md:bottom-8 right-5 bottom-8 w-10 h-10 duration-300 delay-100 ease-in-out bg-secondary bg-opacity-50 backdrop-blur-md rounded-full p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
</div>
  )
}

export default Playlist