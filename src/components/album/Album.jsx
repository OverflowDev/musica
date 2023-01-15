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
    <div className='border min-h-screen ease-in delay-100 duration-300 bg-center bg-cover' style={{ backgroundImage: `url(${collection2})` }}>
        <Navbar />
        <div className='flex md:space-x-28' >
            <div className='px-6 md:px-10'>
                <Sidebar />
            </div>

            <div className='md:grid lg:grid-cols-2 gap-x-8 w-full '>


            </div>
        </div>

</div>
  )
}

export default Album