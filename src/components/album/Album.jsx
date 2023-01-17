import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import {charts} from '../../chart'

// import 
import Sidebar from '../../layouts/Sidebar'
import Navbar from '../../layouts/Navbar'

import collection2 from '../../assets/collection2.svg'
import image1 from '../../assets/image1.svg'


function Album() {

    const [data, setData] = useState([])

    const params = useParams()

    useEffect(() => {
      setData(charts[params.id - 1])
    }, [params.id])

    console.log(data)

  return (
    <div className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${data.image})` }}>
        <div 
            // className='w-full bg-gradient-to-b from-blue-800/5 to-dark-alt backdrop-brightness-50 h-screen'
        className='bg-gradient-to-b from-blue-800/5 to-dark-alt bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-brightness-50 bg-opacity-60 h-screen'
        >
            <div>
                <Navbar />
            </div>
            
            <div className='px-6 md:px-10 w-full flex md:space-x-28 '>
                <div className=''>
                    <Sidebar />
                </div>

                <div className='mt-8 mb-8'>

                    <div className='flex flex-wrap items-center md:justify-start justify-center md:gap-x-4'>
                        <div className='md:w-72 md:h-72 w-80 h-80 rounded-2xl bg-cover bg-center drop-shadow-xl' style={{ backgroundImage: `url(${data.image})` }}></div>
                        <div className='flex flex-col lg:w-6/12 p-2 self-end'>
                            <div className="md:mt-0 mt-2">
                                <h1 className='md:text-4xl text-2xl text-light font-bold tracking-wider'>{data.albumTitle}</h1>
                                <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad iusto sint minima beatae similique placeat architecto, id alias nisi explicabo itaque quasi consectetur, quae laboriosam atque obcaecati nam suscipit?</p>
                            </div>
                            {/* button  */}
                            <div className='flex items-center md:justify-start justify-between md:space-x-4 space-x-0 mt-3'>
                                <button className='border-0 hover:bg-light/5 bg-dark-alt outline-none lg:px-4 px-2 py-2 rounded-3xl flex items-center gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:h-6 md:h-6 w-5 h-5 text-secondary">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                    </svg>
                                    Play All
                                </button>
                                <button className='border-0 hover:bg-light/5 bg-dark-alt outline-none lg:px-4 px-2 py-2 rounded-3xl flex items-center gap-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:h-6 md:h-6 w-5 h-5 text-secondary">
                                        <path d="M22 8v3h-5.5v5.11c-1.84.42-3.24 1.98-3.46 3.89H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 012 2m-3.5 5v5.21a2.5 2.5 0 10-1 4.79 2.5 2.5 0 002.5-2.5V15h2v-2h-3.5z" />
                                    </svg>
                                    Add to collection
                                </button>
                                <button className='border-0 hover:bg-light/5 bg-dark-alt outline-none w-10 h-10 rounded-full flex items-center justify-center'>
                                    {data.favorite ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg> 
                                        :                                          
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    }
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className='flex-col space-y-4 mb-28 mt-10'>
                        {data?.songs?.map((song) => {
                            return (
                                <div className='flex items-center justify-between bg-album md:w-full md:h-16 rounded-lg md:px-4 px-2'>
                                    <div className='flex items-center w-full'>
                                        <img src={song.image} alt="image1" className='rounded-2xl object-cover bg-center h-12 w-12 md:p-1 p-2' />
                                        <div className="md:hidden flex-col">
                                            <h1 className='text-light md:text-md text-xs'>{song.title}</h1>
                                            <h1 className='text-sm md:hidden'>{data.artist}</h1>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex items-center w-full'>
                                        <h1 className='text-light md:text-md text-sm'>{song.title}s</h1>
                                    </div>
                                    <div className='hidden md:flex items-center w-full'>
                                        <h1 className='text-light text-md'>{data.artist}</h1>
                                    </div>
                                    <div className='hidden md:flex items-center w-full'>
                                        <h1 className='text-light text-md'>--:--</h1>
                                    </div>
                                    <div className='flex  items-center justify-end w-full'>
                                        <div className='flex-col '>
                                            <button className='flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary">
                                                    <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <h1 className='text-light  text-xs md:hidden'>4:17</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Album