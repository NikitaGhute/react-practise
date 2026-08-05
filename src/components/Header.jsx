import React from "react";
import '../../src/components/Style.css'
import {
  MapPin,
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
} from "lucide-react";
import Navbar from  '../components/Navbar' 
import Locations from "../data/Locations";


const Header = () => {

  // useState forr login popup
  const [showLocationPopup, setShowLocationPopup] = React.useState(false)

  // logic for write hide and show location card
  const LocationCardOpen= ()=>{

    console.log("locaiton card opened");
  }

  return (
    <>
      {/* Top Header */}
      <header className="bg-[#ffffff] text-black">

        <div className="flex items-center justify-between px-4 py-2">

          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="amazon"
              className="w-28"
            />
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center ml-4 cursor-pointer"
          onClick={()=>setShowLocationPopup(true)}
          >
            <MapPin size={18} />
            <div className="ml-1 text-xs leading-3">
              <p className="text-black-300 text-xs">Delivering to Mumbai</p>
              <p className="font-semibold text-black text-sm">Update location</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-1 mx-5 border border-black-400 rounded-md">

            <select className="bg-gray-200 text-black px-2 rounded-l-md">
              <option>All</option>
            </select>

            <input
              type="text"
              placeholder="Search Amazon.in"
              className="flex-1 px-3 text-xs text-black"
            />

            <button className="bg-yellow-400 px-4 rounded-r-md">
              <Search size={22} className="text-black" />
            </button>

          </div>

          {/* Language */}
          <div className="hidden lg:flex items-center cursor-pointer">
            🇮🇳
            <span className="ml-1 font-semibold">EN</span>
            <ChevronDown size={16} />
          </div>

          {/* Account */}
          <div className="hidden lg:block ml-5 cursor-pointer">
            <p className="text-xs">Hello, sign in</p>
            <p className="font-semibold text-sm">
              Account & Lists
            </p>
          </div>

          {/* Orders */}
          <div className="hidden lg:block ml-5 cursor-pointer">
            <p className="text-xs">Returns</p>
            <p className="font-semibold text-sm">
              & Orders
            </p>
          </div>

          {/* Cart */}
          <div className="flex items-center ml-5 cursor-pointer">
            <ShoppingCart size={28} />
            <span className="mt-2 text-[16px]">Cart</span>
          </div>

        </div>
      </header>

      <Navbar />
      {/* IF CLICKED ON LOCATION ICON
      SHOW POPUP
      ELSE
      HIDE THE POPUP
      */}
      {setShowLocationPopup && < Locations />}
      </>
    );
};

export default Header;