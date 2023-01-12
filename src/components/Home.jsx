import React from 'react'
import Sidebar from '../layouts/Sidebar'

import Image1 from '../assets/image1.svg'
import Image2 from '../assets/image2.svg'
import Wave from '../assets/Wave.svg'
import WaveMobile from '../assets/WaveMobile.svg'
import artist from '../assets/Artist.svg'
import man from '../assets/man.svg'
import lady from '../assets/lady.svg'
import Release from './Release'

function Home() {
  return (
    <div className='h-screen mt-6 ease-in delay-100 duration-300'>
        <div className='flex md:space-x-28'>
            <div>
                <Sidebar />
            </div>

            <div className='md:grid lg:grid-cols-2 gap-x-8 w-full '>

                <div className="bg-playlist h-96 w-full rounded-2xl relative overflow-hidden">
                    <div className='text-white p-10 md:w-4/6 absolute'>
                        <h1 className='text-md'>Curated Playlist</h1>
                        <div className='mt-16 flex-col px-2'>
                            <h1 className='text-2xl font-bold tracking-widest'>R & B Hits</h1>
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
                <div className='flex flex-col space-y-4 md:mt-0 mt-3'>
                    <h1 className='text-light tracking-wider font-bold'>Top Charts</h1>

                    <div className='bg-dark-alt md:w-5/6 md:h-24 rounded-2xl md:px-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <img src={Image1} alt="image1" className='object-cover h-24 w-24 md:p-3 p-2' />
                                <div className='flex-col p-3'>
                                    <h1 className='text-light text-md'>Golden age of 80s</h1>
                                    <h1 className='text-sm'>Sean Swadder</h1>
                                    <h1 className='text-sm text-light'>2:30:45</h1>
                                </div>
                            </div>
                            <button className='flex items-center justify-center h-10 w-10 rounded-full border border-secondary'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='bg-dark-alt md:w-5/6 md:h-24 rounded-2xl md:px-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <img src={Image2} alt="image1" className='object-cover h-24 w-24 md:p-3 p-2' />
                                <div className='flex-col p-3'>
                                    <h1 className='text-light text-md'>Tomorrow's Tunes</h1>
                                    <h1 className='text-sm'>Obi Datti</h1>
                                    <h1 className='text-sm text-light'>2:30:45</h1>
                                </div>
                            </div>
                            <button className='flex items-center justify-center h-10 w-10 rounded-full border border-secondary'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='bg-dark-alt md:w-5/6 md:h-24 rounded-2xl md:px-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <img src={Image1} alt="image1" className='object-cover h-24 w-24 md:p-3 p-2' />
                                <div className='flex-col p-3'>
                                    <h1 className='text-light text-md'>Golden age of 80s</h1>
                                    <h1 className='text-sm'>Sean Swadder</h1>
                                    <h1 className='text-sm text-light'>2:30:45</h1>
                                </div>
                            </div>
                            <button className='flex items-center justify-center h-10 w-10 rounded-full border border-secondary'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className='mt-8 md:px-28'>
            <Release />
        </div>
    </div>
  )
}

export default Home