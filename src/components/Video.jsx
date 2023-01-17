import React from 'react'
import Navbar from '../layouts/Navbar'

import Sidebar from '../layouts/Sidebar'

function Video() {
  return (
    <div className='px-6 md:px-10 min-h-screen ease-in delay-100 duration-300'>
      <div>
        <Navbar />
      </div>
      <div className='flex md:space-x-28'>
        <div>
            <Sidebar />
        </div>

        <div className='md:grid lg:grid-cols-2 gap-x-8 w-full mt-6 '>
          Videos Coming Soon
        </div>
    </div>
  </div>
  )
}

export default Video