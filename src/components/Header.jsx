import React from "react";
import '../../src/components/Style.css'

const Header= ()=>{
    return (
         
   <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        
        {/* <!-- Logo Section --> */}
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="text-xl font-bold text-indigo-600 tracking-wide">BrandLogo</a>
        </div>

        {/* <!-- Desktop Links (Hidden on Mobile) --> */}
        <div class="hidden md:flex space-x-8 font-medium text-gray-600">
          <a href="#" class="hover:text-indigo-600 transition duration-150 ease-in-out">Home</a>
          <a href="#" class="hover:text-indigo-600 transition duration-150 ease-in-out">About</a>
          <a href="#" class="hover:text-indigo-600 transition duration-150 ease-in-out">Services</a>
          <a href="#" class="hover:text-indigo-600 transition duration-150 ease-in-out">Contact</a>
        </div>

        {/* <!-- Call to Action Button (Desktop Only) --> */}
        <div class="hidden md:flex items-center">
          <button class="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-150 ease-in-out">
            Get Started
          </button>
        </div>

        {/* <!-- Mobile Menu Hamburger Button --> */}
        <div class="flex md:hidden items-center">
          <button id="menu-btn" class="text-gray-600 hover:text-indigo-600 focus:outline-none" aria-label="Toggle Menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    {/* <!-- Mobile Dropdown Menu (Hidden by Default) --> */}
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-lg">
      <div class="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-gray-600 font-medium">
        <a href="#" class="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">Home</a>
        <a href="#" class="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">About</a>
        <a href="#" class="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">Services</a>
        <a href="#" class="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">Contact</a>
        <div class="pt-4 pb-2 border-t border-gray-200">
          <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
            //     <div className="header-btn">
            //         <button> Get Started</button>
            //     </div>
            // </header>
    )
};

export default Header;