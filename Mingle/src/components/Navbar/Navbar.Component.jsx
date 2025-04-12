import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Kolkata
            <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <h3 className="text-gray-400">Use App</h3>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-2  items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="/MovieMingle.png"
              alt="logo"
              className="w-full h-full rounded"
            />
          </div>
          <div className="w-full flex items-center gap-5 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none "
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Kolkata <BiChevronDown />
          </span>
          <button className="bg-orange-700 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-5 py-5 y-3">
      {/* Small NavBar */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large NavBar */}
      <div className="hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
