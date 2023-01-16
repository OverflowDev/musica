import React from 'react'
import Sidebar from '../../layouts/Sidebar'

import collection2 from '../../assets/collection2.svg'
import Navbar from '../../layouts/Navbar'

import Image1 from '../../assets/image1.svg'
import Image2 from '../../assets/image2.svg'
import Wave from '../../assets/Wave.svg'
import WaveMobile from '../../assets/WaveMobile.svg'
import artist from '../../assets/Artist.svg'
import man from '../../assets/man.svg'
import lady from '../../assets/lady.svg'

function Album() {
  return (
    <div className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${collection2})` }}>
        <div 
            className='bg-gradient-to-b from-blue-800/5 to-dark-alt backdrop-brightness-50 h-screen'
        // className=' bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 h-screen'
        >
            <div>
                <Navbar />
            </div>
            <div className='flex md:space-x-20 '>
                <div className='px-6 md:px-10'>
                    <Sidebar />
                </div>

                <div className='w-full mt-8'>

                    <div className='flex items-center space-x-4'>
                        <div className='w-72 h-72 rounded-2xl' style={{ backgroundImage: `url(${collection2})` }}>

                        </div>
                        <div className='flex flex-col w-6/12 p-2 self-end'>
                            <h1 className='text-4xl font-bold tracking-wider'>Tomorrow's tunes</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad iusto sint minima beatae similique placeat architecto, id alias nisi explicabo itaque quasi consectetur, quae laboriosam atque obcaecati nam suscipit?</p>
                            {/* button  */}
                            <div className="flex items-center gap-x-5 mt-2">
                                <button className='py-2 px-3 rounded-3xl border.none outline-none bg-dark-alt flex items-center gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                    </svg>
                                    Play all
                                </button>
                                <button className='py-2 px-3 rounded-3xl border.none outline-none bg-dark-alt flex items-center gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                                        <path d="M22 8v3h-5.5v5.11c-1.84.42-3.24 1.98-3.46 3.89H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 012 2m-3.5 5v5.21a2.5 2.5 0 10-1 4.79 2.5 2.5 0 002.5-2.5V15h2v-2h-3.5z" />
                                    </svg>
                                    Add to Collection
                                </button>
                                <button className='w-10 h-10 rounded-full border.none outline-none bg-dark-alt flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-700">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Album