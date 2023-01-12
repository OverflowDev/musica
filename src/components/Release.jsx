import React from 'react'

import release from '../assets/release.svg'
import release1 from '../assets/release1.svg'
import release2 from '../assets/release2.svg'
import collection1 from '../assets/collection1.svg'
import collection2 from '../assets/collection2.svg'
import collection3 from '../assets/collection3.svg'

function Release() {
  return (
    <div className=''>
        <h1 className='text-3xl font-semibold text-light tracking-wide'>New Release</h1>
        <div className='flex gap-x-6 mt-6'>
            <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${release})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div>
            <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${release1})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div>
            <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${release2})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div>
            <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${collection1})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div>
            <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${collection2})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div>
            <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${collection3})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div>
            <div>
                <div className='w-40 h-40 rounded-lg' style={{ backgroundImage: `url(${collection3})` }}></div>
                <h1 className='text-sm text-light'>Life in a bubble</h1>
            </div>
        </div>
    </div>
  )
}

export default Release