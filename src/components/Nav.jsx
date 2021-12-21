import React, { useState } from "react";

function Nav({ open, setOpen }) {
  return (
    <div className="border-b shadow relative z-20">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-6 px-10">
        {/* Brand Logo */}
        <div className="">
          <a href="/">
            <img className="h-14" src="/img/logo.svg" alt="logo" />
          </a>
        </div>

        {/* List */}
        <ul className="items-center space-x-10 text-lg font-semibold hidden lg:flex lg:flex-1 ml-10 uppercase">
          <li className="hover:text-main-color">
            <a href="#">Menu</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#">Rewards</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#">Gift Cards</a>
          </li>
        </ul>

        {/* etc links */}
        <ul className="space-x-8 text-lg font-semibold items-center hidden lg:flex">
          <li className="hover:text-main-color">
            <a className="flex item-center space-x-2 " href="#">
              <img className="h-6 " src="/img/marker.svg" alt="" />
              <span className="">Find a Store</span>
            </a>
          </li>
          <li>
            <button className="text-sm font-bold rounded-full px-6 py-2 text-black border border-black">
              Sign In
            </button>
          </li>
          <li>
            <button className="text-sm font-bold rounded-full px-6 py-2 text-white bg-black ">
              Join Now
            </button>
          </li>
        </ul>

        <div className="lg:hidden">
          {!open ? (
            <span
              className="text-4xl cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
            >
              ☰
            </span>
          ) : (
            <span
              className="text-5xl cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            >
              ×
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
