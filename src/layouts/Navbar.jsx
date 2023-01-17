import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import Logo from '../assets/Logo.svg'

function Navbar() {

  let location = useLocation()

  const active = 'text-secondary flex items-center gap-x-6 font-semibold tracking-wider text-lg hover:opacity-70 '
  const notActive = 'hover:text-gray-400 flex items-center gap-x-6 font-semibold tracking-wider text-lg hover:opacity-70'

  const [open, setOpen] = useState(false)
  
  const closeMenu = () => setOpen(false)

  return (
    <div 
      className='sticky top-0 z-10 bg-transparent'
    >
      <nav className='flex items-center gap-x-20 py-3 px-6 md:px-10'>

        <div className=' z-50 lg:w-auto w-full flex items-center justify-between'>
          <div className='flex items-center'>
            {/* Menu button amd Logo */}
            <button 
              className='mr-8 lg:hidden'
              onClick={() => setOpen(!open)}
            >
              {open ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>              
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              }
            </button>
            {/* Logo  */}
            <Link to='/'>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          {/* Search  */}
          {/* <div className='md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div> */}
          <div className='md:hidden relative'>
            <input type="search" 
              className="peer cursor-pointer relative z-10 h-12 w-4 rounded-full border bg-transparent pl-12 outline-none focus:w-56 focus:cursor-text focus:border-playlist focus:pl-16 focus:pr-4 text-light"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
              className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-dark px-3.5 peer-focus:border-playlist peer-focus:stroke-light"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>

        {/* Desktop Screen  */}
        <ul className='md:flex items-center hidden'>
          <div className="relative z-50">
            <button className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 tracking-wider bg-inherit text-gray-300 font-semibold placeholder-gray-400 focus:outline-none focus:bg-dark-alt focus:text-gray-400 sm:text-sm transition duration-150 ease-in-out" 
              placeholder="Search artists" 
            />
          </div>
        </ul>

        {/* Mobile Screen  */}
        <ul
          className={`bg-dark-alt absolute top-0 bottom-0 w-full flex flex-col h-screen py-36 px-12 space-y-12 delay-200 duration-500 z-10 lg:hidden transition ${open ? 'left-0' : 'left-[-100%]'}`}
        >
          <Link to='/' onClick={closeMenu} className={location.pathname === '/' ? active : notActive}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 `}>
              <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z" /> 
            </svg>
            <h1 className={location.pathname === '/' ? 'text-light' : 'text-gray-400'}>Home</h1>
          </Link>
          <Link to='/collection' onClick={closeMenu} className={location.pathname === '/collection' ? active : notActive}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8`}>
              <path d="M22 8v3h-5.5v5.11c-1.84.42-3.24 1.98-3.46 3.89H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 012 2m-3.5 5v5.21a2.5 2.5 0 10-1 4.79 2.5 2.5 0 002.5-2.5V15h2v-2h-3.5z" />
            </svg>
            <h1 className={location.pathname === '/collection' ? 'text-light' : 'text-gray-400'}>My Collections</h1>
          </Link>
          <Link to='/radio' onClick={closeMenu} className={location.pathname === '/radio' ? active : notActive}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8`}>
              <path fillRule="evenodd" d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clipRule="evenodd" />
            </svg>
            <h1 className={location.pathname === '/radio' ? 'text-light' : 'text-gray-400'}>Radio</h1>
          </Link>
          <Link to='/videos' onClick={closeMenu} className={location.pathname === '/videos' ? active : notActive}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 `}>
              <path d="M9 13V5c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v6h-3.43l-1.28-1.74a.14.14 0 00-.24 0L15.06 12c-.06.06-.18.07-.24 0l-1.43-1.75a.152.152 0 00-.23 0l-2.11 2.66c-.08.09-.01.24.11.24h6.34V15H11c-1.11 0-2-.89-2-2m-3 9v-1H4v1H2V2h2v1h2V2h2.39C7.54 2.74 7 3.8 7 5v8c0 2.21 1.79 4 4 4h4.7c-1.03.83-1.7 2.08-1.7 3.5 0 .53.11 1.03.28 1.5H6M4 7h2V5H4v2m0 4h2V9H4v2m0 4h2v-2H4v2m2 4v-2H4v2h2m17-6v2h-2v5.5a2.5 2.5 0 01-5 0 2.5 2.5 0 013.5-2.29V13H23z" />
            </svg>
            <h1 className={location.pathname === '/videos' ? 'text-light' : 'text-gray-400'}>Music Videos</h1>
          </Link>
          <Link to='/profile' onClick={closeMenu} className={location.pathname === '/profile' ? active : notActive}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8`}>
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
            <h1 className={location.pathname === '/profile' ? 'text-light' : 'text-gray-400'}>Profile</h1>
          </Link>
          <li  onClick={closeMenu} className='flex items-center gap-x-6 font-semibold tracking-wider text-lg hover:opacity-70'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
            Log Out
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar