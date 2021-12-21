import React from "react";

function MobileNav({ open }) {
  return (
    // Mobile Nav
    <div
      className={`h-screen w-[80%] absolute bg-white px-8 py-20 space-y-10 top-[80px] transition-all duration-300 right-0 lg:hidden ${
        open ? " translate-x-0 ease-out" : "translate-x-[999px] ease-in"
      }`}
    >
      <ul className="text-xl font-medium space-y-8 border-b-2 pb-10">
        <li className="flex justify-between">
          Menu <span className="text-2xl">➜</span>
        </li>
        <li>Rewards</li>
        <li>Gift Cards</li>
      </ul>

      <div className="space-x-5">
        <button className="text-sm font-bold rounded-full px-6 py-2 text-black border border-black">
          Sign In
        </button>
        <button className="text-sm font-bold rounded-full px-6 py-2 text-white bg-black ">
          Join Now
        </button>
      </div>
      <a
        className="flex item-center space-x-2 font-semibold hover:text-main-color"
        href="#"
      >
        <img className="h-6 " src="/img/marker.svg" alt="" />
        <span className="">Find a Store</span>
      </a>
    </div>
  );
}

export default MobileNav;
