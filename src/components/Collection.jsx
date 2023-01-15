import React from 'react'
import Sidebar from '../layouts/Sidebar'

import Collection1 from '../assets/collection1.svg'
import Collection2 from '../assets/collection2.svg'
import Collection3 from '../assets/collection3.svg'

function Collection() {
  return (
    <div className='px-6 md:px-10 mt-6 flex md:space-x-28 ease-in delay-100 duration-300'>
        <div>
            <Sidebar />
        </div>

        <div className=' w-full'>
          {/* Collections Button  */}
          <div className="flex items-center space-x-6">
            <button className='rounded-full py-2 md:px-8 px-6 bg-secondary border-none text-dark-alt'>My Collection</button>
            <button className='rounded-full py-2 md:px-8 px-12 border border-light'>Likes</button>
          </div>

          {/* Cards  */}
          <div className='flex flex-wrap md:justify-start justify-center'>

            <div className="flex p-3 ">
              <div className="group overflow-hidden relative max-w-md w-72 h-64 md:w-64 md:h-64 my-4 shadow-sm rounded-lg">
                <img src={Collection1} alt="Features" className='w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-0 group-hover:scale-110' />
                <div className="flex-col group-hover:bottom-6 text-center absolute md:bottom-2 md:left-1 bottom-8 left-1 duration-300 ease-in delay-100">
                  <h1 className="text-lg font-semibold tracking-wider">Limits</h1>
                  <h1 className="text-xs">John Watts</h1>
                </div>
                <h1 className='group-hover:bottom-1 duration-500 absolute md:left-1 md:-bottom-10 bottom-1 left-1 text-xs text-secondary'>33k Likes</h1>
                <button className='flex items-center md:group-hover:right-3  absolute md:-right-14 md:bottom-8 right-5 bottom-8 w-10 h-10 duration-300 delay-100 ease-in-out bg-secondary bg-opacity-50 backdrop-blur-md rounded-full p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex p-3 ">
              <div className="group overflow-hidden relative max-w-md w-72 h-64 md:w-64 md:h-64 my-4 shadow-sm rounded-lg">
                <img src={Collection2} alt="Features" className='w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-0 group-hover:scale-110' />
                <div className="flex-col group-hover:bottom-6 text-center absolute md:bottom-2 md:left-1 bottom-8 left-1 duration-300 ease-in delay-100">
                  <h1 className="text-lg font-semibold tracking-wider">Limits</h1>
                  <h1 className="text-xs">John Watts</h1>
                </div>
                <h1 className='group-hover:bottom-1 duration-500 absolute md:left-1 md:-bottom-10 bottom-1 left-1 text-xs text-secondary'>33k Likes</h1>
                <button className='flex items-center md:group-hover:right-3  absolute md:-right-14 md:bottom-8 right-5 bottom-8 w-10 h-10 duration-300 delay-100 ease-in-out bg-secondary bg-opacity-50 backdrop-blur-md rounded-full p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex p-3 ">
              <div className="group overflow-hidden relative max-w-md w-72 h-64 md:w-64 md:h-64 my-4 shadow-sm rounded-lg">
                <img src={Collection3} alt="Features" className='w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-0 group-hover:scale-110' />
                <div className="flex-col group-hover:bottom-6 text-center absolute md:bottom-2 md:left-1 bottom-8 left-1 duration-300 ease-in delay-100">
                  <h1 className="text-lg font-semibold tracking-wider">Limits</h1>
                  <h1 className="text-xs">John Watts</h1>
                </div>
                <h1 className='group-hover:bottom-1 duration-500 absolute md:left-1 md:-bottom-10 bottom-1 left-1 text-xs text-secondary'>33k Likes</h1>
                <button className='flex items-center md:group-hover:right-3  absolute md:-right-14 md:bottom-8 right-5 bottom-8 w-10 h-10 duration-300 delay-100 ease-in-out bg-secondary bg-opacity-50 backdrop-blur-md rounded-full p-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Collection