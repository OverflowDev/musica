import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../layouts/Sidebar'

import Image1 from '../assets/image1.svg'
import Image2 from '../assets/image2.svg'
import Wave from '../assets/Wave.svg'
// import WaveMobile from '../assets/WaveMobile.svg'
import artist from '../assets/Artist.svg'
import man from '../assets/man.svg'
import lady from '../assets/lady.svg'
import Release from './Release'
import Playlist from './Playlist'
import Navbar from '../layouts/Navbar'
import TopSongs from './TopSongs'

// import {charts} from '../chart'


function Home() {

    

    // const [top, setTop] = useState(charts)

  return (
    <div className='min-h-screen ease-in delay-100 duration-300 px-6 md:px-10'>
        <div>
            <Navbar />
        </div>
        
        <div className='flex md:space-x-28'>
            <div>
                <Sidebar />
            </div>

            <div className='md:grid lg:grid-cols-2 gap-x-8 w-full mt-6'>

                <div className="bg-playlist h-96 w-full rounded-2xl relative overflow-hidden">
                    <div className='text-white p-10 md:w-4/6 absolute'>
                        <h1 className='text-md'>Curated Playlist</h1>
                        <div className='mt-16 flex-col px-2'>
                            <h1 className='text-2xl font-bold tracking-widest'>Gospel Hits</h1>
                            <p className='leading-5 tracking-wide '>All mine, Lie again, Petty call me everyday,Out of time, No love, Bad habit,and so much more</p>
                        </div>
                        <div className="flex items-center space-x-6 mt-14">
                            <div className="flex  -space-x-4">
                                <img className="w-10 h-10 rounded-full" src={man} alt="like" />
                                <img className="w-10 h-10 rounded-full" src={lady} alt="like" />
                                <img className="w-10 h-10 rounded-full" src={man} alt="like" />
                                <img className="w-10 h-10 rounded-full" src={lady} alt="like" />
                            </div>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                                </svg>
                                <h1 className='Text-lg'>33K Likes</h1>
                            </div>
                        </div>
                    </div>
                    {/* Wave and Image  */}
                    <div className=''>
                        <img src={Wave} alt="wave" className='md:h-full md:w-full object-cover absolute md:top-0 md:right-0 md:rotate-0 -rotate-90 left-10' />
                    </div>
                    <div className='absolute inset-y-0 -right-3 md:block hidden'>
                        <img src={artist} alt="artist" className='h-full' />
                    </div>
                </div>
                {/* Chart  */}
                <div>
                    <TopSongs />
                </div>

            </div>
        </div>

        <div className=' mb-6 md:px-28'>
            <Release />
        </div>
    </div>
  )
}

export default Home