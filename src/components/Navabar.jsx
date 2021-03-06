import React from 'react'

function Navabar() {
    return (
        <div>
        <header class="text-gray-600 body-font bg-gray-200 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="w-10 h-10 text-white p-2 bg-green-400 rounded-full" viewBox="0 0 24 24">
              <text fill="text-white-200" x="0" y="20" > UT </text>
            </svg>
            <span className="ml-3 text-xl">Uttarakhand Tourism</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">User</a>
            <a className="mr-5 hover:text-gray-900">Services</a>
          </nav>
          <button className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
        </div>
    )
}

export default Navabar
