import React from 'react'

import Sidebar from '../layouts/Sidebar'

function Profile() {
  return (
    <div className='px-6 md:px-10 min-h-screen mt-6 ease-in delay-100 duration-300'>
    <div className='flex md:space-x-28'>
      <div>
          <Sidebar />
      </div>

      <div className='md:grid lg:grid-cols-2 gap-x-8 w-full '>
        Profile Coming Soon
      </div>
    </div>
  </div>
  )
}

export default Profile